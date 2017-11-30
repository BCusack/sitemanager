import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesModule } from 'angular-particle';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    ParticlesModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
