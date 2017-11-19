import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSiteRoutingModule } from './add-site-routing.module';
import { AddSiteComponent } from './add-site.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core/core.module';



@NgModule({
  imports: [
    CommonModule,
    AddSiteRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule
  ],
  declarations: [
    AddSiteComponent
  ]
})
export class AddSiteModule { }
