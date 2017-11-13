import { AddSiteComponent } from './pages/add-site/add-site.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addsite',
    component: AddSiteComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
