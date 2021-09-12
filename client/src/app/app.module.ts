import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CarsComponent } from './pages/cars/cars.component';
import { SingleCarComponent } from './pages/cars/single-car/single-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartsComponent } from './pages/parts/parts.component';
import { PartsDisplayComponent } from './components/parts-display/parts-display.component';
import { AddPartComponent } from './components/add-part/add-part.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { HomeComponent } from './pages/home/home.component';
import { CarFunctionComponent } from './components/car-function/car-function.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { CarComponent } from './pages/cars/car/car.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'cars',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CarsComponent
      },
      {
        path: ':carid',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: CarComponent
          },
          {
            path: 'maintenance',
            component: MaintenanceComponent
          }
        ]
      }
    ]},
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
    HomeComponent,
    CarFunctionComponent,
    MaintenanceComponent,
    CarComponent
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
