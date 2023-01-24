const fs = require('firebase-admin');

const serviceAccount = require("./hospiforms-firebase-adminsdk-3182o-9ffcfc9f93.json");

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});


const db = fs.firestore()
const auth = fs.auth()

module.exports = {
  db,auth
}