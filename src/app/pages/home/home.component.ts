import { SiteService } from './../../-services/site.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: AngularFireList<any>;

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.lists = this.siteService.listRef;
  }

}
