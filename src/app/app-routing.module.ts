import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointOfContactsComponent } from './point-of-contacts/point-of-contacts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LocationsComponent } from './locations/locations.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { PointsOfInterestComponent } from './points-of-interest/points-of-interest.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'contacts', component: PointOfContactsComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: 'quicklinks', component: QuickLinksComponent
  },
  {
    path: 'interests', component: PointsOfInterestComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
