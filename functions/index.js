const functions = require('firebase-functions');


// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.createUser = functions.firestore
.document('sites')
.onCreate(event => {
  // Get an object representing the document
  // e.g. {'name': 'Marie', 'age': 66}
  var newValue = event.data.data();

  // access a particular field as you would any JS property
  var name = newValue.interval;
  consol.log(name);

  // perform desired operations ...
});