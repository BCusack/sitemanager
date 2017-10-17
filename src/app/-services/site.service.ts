import { AngularFireList } from 'angularfire2/database/interfaces';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { Site } from '../models/site';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SiteService {
  listRef: AngularFireList<any>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.listRef = this.db.list<Site>('/sites');
  }
}
