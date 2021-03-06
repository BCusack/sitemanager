import { AngularFireList } from 'angularfire2/database/interfaces';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { Site } from '../models/site';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class SiteService {
  detail: AngularFirestoreDocument<{}>;
  listRef: AngularFirestoreCollection<Site>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.listRef = this.db.collection<Site>('/sites', ref => ref.orderBy('lastcompletedDate'));


  }
  getDetails(id) {
    this.detail = this.db.doc('sites/' + id);
    return this.detail;
  }
  resetDate(id) {
    this.detail = this.db.doc('sites/' + id);
    const date: Date = new Date();
    this.detail.update({
      'lastcompletedDate': date
    });
  }
}
