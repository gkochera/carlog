import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CarsComponent } from './components/cars/cars.component';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartsComponent } from './components/parts/parts.component';
import { PartsDisplayComponent } from './components/parts-display/parts-display.component';
import { AddPartComponent } from './components/add-part/add-part.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: CarsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'parts', component: PartsComponent},
  {path: 'users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CarsComponent,
    SingleCarComponent,
    AddCarComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PartsComponent,
    PartsDisplayComponent,
    AddPartComponent,
    UsersComponent,
    AddUserComponent,
    UserDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
