import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', loadChildren: './pages/landing/landing.module#LandingModule' },
  {
    path: 'home',
    component: HomeComponent,
    data: { value: 'home' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent, data: { value: 'details'}
  },
  { path: 'addsite', loadChildren: './pages/add-site/add-site.module#AddSiteModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
