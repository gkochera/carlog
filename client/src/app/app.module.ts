import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CarsComponent } from './components/cars/cars.component';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CarsComponent,
    SingleCarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
