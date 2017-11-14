import { SiteService } from './../../_services/site.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Site } from '../../models/site';
import { Observable } from 'rxjs/Observable';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: any;
  header: string[];
  d: Observable<{ id: string; }[]>;
  data: Site[];
  lists: Observable<Site[]>;


  constructor(private siteService: SiteService) {

  }

  ngOnInit() {
    // use snapshotChanges() to get the key value
    this.d = this.siteService.listRef.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      }); this.colorHeader();
  }
  colorHeader() {
    const i = 'card-header bg-primary text-white';
    this.date = this.d.subscribe(console.log);

    this.header = [i];
  }
}
