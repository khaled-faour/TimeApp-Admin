const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors');
admin.initializeApp();


const auth = admin.auth();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.userJoin = functions.auth.user().onCreate(async (user) => {
    return admin.firestore().collection('UsersTasks').doc(user.uid).set({});
});

exports.notificationAdd = functions.firestore.document('UsersTasks/{userId}/Tasks/{userTaskId}').onWrite(async (change, context) => {
    // if (!context.auth) {
    //     throw new functions.https.HttpsError(
    //         "failed-precondition",
    //         "The function must be called while authenticated."
    //     );
    // }

    const user = await admin.auth().getUser(context.params.userId);

    if (change.before.exists) {
        const task = change.after.data();
        admin.firestore().collection("Notifications").add({
            type: "Finish",
            user: user.displayName,
            taskName: task.name,
            endTime: change.after.data().endTime,
            notificationTime: admin.firestore.FieldValue.serverTimestamp()
        });
    } else if (!change.before.exists && change.after.exists) {
        const task = change.after.data();
        admin.firestore().collection("Notifications").add({
            type: "Start",
            user: user.displayName,
            taskName: task.name,
            startTime: change.after.data().startTime,
            notificationTime: admin.firestore.FieldValue.serverTimestamp()
        });
    }



});


exports.getNotifications = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const notificationsListArray = [];
    const listNotifications = await admin.firestore().collection("Notifications")
        .orderBy("notificationTime", "desc")
        .limit(data.numberOfNotifications)
        .get()
        .then(snapshot => {
            snapshot.docs.forEach(async doc => {
                notificationsListArray.push({ data: doc.data(), id: doc.id });
            })
            console.log("Notifications List Array Ready!");
            console.log("Notifications", notificationsListArray)
            return notificationsListArray
        })
        .catch(e => {
            console.log(e);
        })
    console.log("All Notifications", notificationsListArray);
    return (notificationsListArray);
});


exports.getAllUsers = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const usersListArr = [];
    const listUsers = await admin.auth().listUsers()
        .then((listUsersResult) => {
            listUsersResult.users.forEach(user => {
                usersListArr.push({ id: user.uid, displayName: user.displayName, email: user.email, creationTime: user.metadata.creationTime, lastSignInTime: user.metadata.lastSignInTime });
            });
            return console.log("Users List Array Ready!");
        })
        .catch((error) => {
            console.log("Error listing users:", error);
            return (error);
        });

    return (usersListArr);
});


exports.getAllCategories = functions.https.onCall(async (data, context) => {


    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }

    const categoriesListArray = [];
    const listCategories = await admin.firestore().collection("Categories").orderBy("name", "asc").get()
        .then(snapshot => {
            snapshot.docs.forEach(async doc => {

                categoriesListArray.push({ name: doc.data().name, id: doc.id });

            })
            console.log("Categories List Array Ready!");
            console.log("Categories", categoriesListArray)
            return categoriesListArray
        })
        .catch(e => {
            console.log(e);
        })






    console.log("All Data", categoriesListArray);
    return (categoriesListArray);
});

exports.getAllTasks = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const tasksListArray = [];
    const listTasks = await admin.firestore().collection("Categories").doc(data.categoryId).collection('Tasks').orderBy("name", "asc").get()
        .then(snapshot => {
            snapshot.docs.forEach(async doc => {
                console.log("Task", doc.data());
                tasksListArray.push({ name: doc.data().name, description: doc.data().description, id: doc.id });
            })
            return console.log("Tasks ready to be fetched");
        }).catch(e => {
            console.log(`Tasks Error: ${e}`)
        });
    console.log("tasks", tasksListArray)

    return (tasksListArray);
});

exports.addCategory = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const addNewCategory = await admin.firestore().collection("Categories").add({
        name: data.name
    }).then(respose => {
        return console.log(`Added: ${respose}`)
    }).catch(e => {
        console.log('Error Adding Category', e)
    });
});

exports.editCategory = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const editSelectedCategory = await admin.firestore().collection("Categories").doc(data.categoryId).set({
        name: data.name
    }, { merge: true }).then(respose => {
        return console.log(`Edited: ${respose}`)
    }).catch(e => {
        console.log(`Editing error: ${e}`)
    });
});

exports.deleteCategory = functions.https.onCall(async (data, context) => {
    const categoryId = data.categoryId;
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const deleteSelectedCategory = await admin.firestore().collection("Categories").doc(`${categoryId}`)
        .delete()
        .then((response) => {
            return console.log(`Deleted: ${response}`)
        }).catch(e => {
            return console.log(`Delete Error: ${e}`)
        });
});


exports.addTask = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const addNewTask = await admin.firestore().collection("Categories").doc(data.categoryId).collection("Tasks").add({
        name: data.name,
        description: data.description,
    }).then(respose => {
        return console.log(`Added: ${respose}`)
    }).catch(e => {
        console.log('Error Adding Task', e)
    });
});


exports.deleteTask = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const deleteSelectedTask = await admin.firestore().collection("Categories").doc(data.categoryId).collection("Tasks").doc(data.taskId)
        .delete()
        .then((response) => {
            return console.log(`Deleted: ${response}`)
        }).catch(e => {
            return console.log(`Delete Error: ${e}`)
        });
});

exports.getTask = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const task = await admin.firestore().collection("Categories").doc(data.categoryId).collection('Tasks').doc(data.taskId).get()


    return { id: task.id, name: task.data().name, description: task.data().description };
});


exports.editTask = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "The function must be called while authenticated."
        );
    }
    const editSelectedCategory = await admin.firestore().collection("Categories").doc(data.categoryId).collection("Tasks").doc(data.taskId).set({
        name: data.name,
        description: data.description
    }, { merge: true }).then(respose => {
        return console.log(`Edited: ${respose}`)
    }).catch(e => {
        console.log(`Editing error: ${e}`)
    });
});

