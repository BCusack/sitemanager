import { Site } from '../../models/site';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../_services/site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  displayError: any;
  form: FormGroup;
  constructor(private fb: FormBuilder, private siteservice: SiteService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: this.fb.group({
        state: [''],
        suburb: [''],
        xcoordinates: [''],
        ycoordinates: [''],
      }),
      interval: [''],
      note: [''],
      member: [''],
    });
  }
  onSubmit({ value, valid }: { value: Site, valid: boolean }) {
    const date: Date = new Date();
    value.lastcompletedDate = date;
    this.siteservice.listRef.add(value)
    .then((success) => this.router.navigate(['/']))
    .catch((error) => {
      this.displayError = error.message;
    });
  }
}
