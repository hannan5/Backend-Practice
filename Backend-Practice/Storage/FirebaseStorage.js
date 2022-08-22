var admin = require("firebase-admin");
var service = require("./FirebaseConfig.json");

admin.initializeApp({
  credential: admin.credential.cert(service),
  storageBucket:'gs://backendpractice-ec5ca.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};
