const functions = require('firebase-functions');


// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloUser = functions.firestore
    .document('sites/{id}')
    .onWrite(event => {
        const due = new Date();
        const data = event.data.data();
        const comp = data.lastcompletedDate;
        due.setDate(comp.getDate() + data.interval);
        console.log('due', due);
        console.log('comp', comp);
        return event.data.ref.update({ 'due': due });
    });