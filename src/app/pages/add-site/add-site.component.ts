import { Site } from '../../models/site';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../-services/site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private siteservice: SiteService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      state: [''],
      suburb: [''],
      coordinates: [''],
      interval: [''],
      note: [''],
      member: [''],
    });
  }
  onSubmit({ value, valid }: { value: Site, valid: boolean }) {
    const database = this.siteservice.listRef;
    database.push({ value });
  }
}
