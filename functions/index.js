const functions = require('firebase-functions');


// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.createUser = functions.firestore
.document('sites')
.onCreate(event => {

  var newValue = event.data.data();

  var name = newValue.interval;
  consol.log(name);

});