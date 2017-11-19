import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSiteComponent } from './add-site.component';

const routes: Routes = [
  { path: '', component: AddSiteComponent, data: { value: 'addsite' } }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSiteRoutingModule { }
