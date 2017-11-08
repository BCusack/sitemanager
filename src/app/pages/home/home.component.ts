import { SiteService } from './../../_services/site.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Site } from '../../models/site';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  d: String;
  data: Site[];
  lists: Observable<Site[]>;


  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.lists = this.siteService.listRef.valueChanges();
    this.lists.subscribe(x => { this.data = x });
  }
}
