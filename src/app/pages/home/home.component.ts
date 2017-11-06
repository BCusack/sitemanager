import { SiteService } from './../../-services/site.service';
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
  i: any;
  data: Site[];
  inter: any;
  lists: Observable<Site[]>;
 

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.lists = this.siteService.list$;
  }

}
