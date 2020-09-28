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

exports.getAllUsers = functions.https.onRequest(async (req, res) => {
    return cors()(req, res, () => {
        return admin.auth().listUsers()
            .then((listUsersResult) => {
                return res.status(200).send(listUsersResult.users);
            })
            .catch((error) => {
                console.log("Error listing users:", error);
                res.status(500).send(error);
            });
    });

});
exports.getAllCategories = functions.https.onRequest(async (req, res) => {
    return cors()(req, res, () => {

        // if (!context.auth) {
        //     throw new functions.https.HttpsError(
        //         "failed-precondition",
        //         "The function must be called while authenticated."
        //     );
        // }

        const categoriesArray = [];
        const listCategories = admin.firestore().collection("Categories").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                const data = doc.data();
                categoriesArray.push(doc);
            });
            return res.status(200).send(categoriesArray);
        }).catch(e => {
            console.log(`List All Users Error: ${e}`)
        });
    });
});



