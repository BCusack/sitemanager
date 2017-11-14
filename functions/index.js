const functions = require('firebase-functions');


// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.dueDate = functions.firestore
    .document('sites/{id}')
    .onWrite(event => {
        const due = new Date();
        const data = event.data.data();
        const previous = event.data.previous.data();
        const comp = data.lastcompletedDate;
        if (previous.interval == data.interval) {
            return null;
        } else {
            due.setDate(comp.getDate() + data.interval);
            return event.data.ref.update({ 'due': due });
        }
    });