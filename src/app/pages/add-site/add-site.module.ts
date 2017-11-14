import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSiteRoutingModule } from './add-site-routing.module';
import { AddSiteComponent } from './add-site.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    AddSiteRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddSiteComponent
  ]
})
export class AddSiteModule { }
