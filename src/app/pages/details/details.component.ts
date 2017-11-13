import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../../_services/site.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Site } from '../../models/site';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: {};
  site: Observable<{}>;
  id: any;

  constructor(private siteservice: SiteService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.site = this.siteservice.getDetails(this.id).valueChanges();
  }
  resetDate() {
    this.siteservice.resetDate(this.id);
  }
}
