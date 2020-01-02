import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointOfContactsComponent } from './point-of-contacts/point-of-contacts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LocationsComponent } from './locations/locations.component';
import { PointsOfInterestComponent } from './points-of-interest/points-of-interest.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PointOfContactsComponent,
    MainPageComponent,
    LocationsComponent,
    PointsOfInterestComponent,
    QuickLinksComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
