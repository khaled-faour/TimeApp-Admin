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
                usersListArr.push(user);
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
    const listCategories = await admin.firestore().collection("Categories").get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                categoriesListArray.push({ data: doc.data(), id: doc.id });
            })
            return console.log("Categories List Array Ready!");

        }).catch(e => {
            console.log(e);
        });

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
    // const listTasks = await admin.firestore().collection("Categories").get()
    //     .then(snapshot => {
    //         snapshot.docs.forEach(async doc => {
    //             console.log(doc.id);
    //             await admin.firestore().collection('Categories').doc(doc.id).collection("Tasks").get()
    //                 .then(tasksSnapshot => {
    //                     tasksSnapshot.docs.forEach(taskDoc => {
    //                         console.log(taskDoc.id)
    //                         tasksListArray.push({ category: doc.data().name, task: taskDoc.data(), taskId: taskDoc.id })
    //                     });
    //                     return console.log("Tasks List Array Ready!")
    //                 }).catch(e => {
    //                     console.log(`Task Error: ${e}`)
    //                 })
    //         })
    //         return console.log("Categories ready to be fetched");
    //     }).catch(e => {
    //         console.log(`Category Error: ${e}`)
    //     });
    const listTasks = await admin.firestore().collectionGroup('Tasks').get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {

                tasksListArray.push({ data: doc.data(), taskId: doc.id });
            })
            return console.log("Collection Group Ready!");
        })
    return (tasksListArray);
});



