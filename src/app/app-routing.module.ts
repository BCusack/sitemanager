import { AddSiteComponent } from './pages/add-site/add-site.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addsite',
    component: AddSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
