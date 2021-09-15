import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../Car'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { PageDataService } from 'src/app/services/pagedata.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})


export class AddCarComponent implements OnInit {
  @Output() onAddCar: EventEmitter<Car> = new EventEmitter;

  showAddCar!: boolean;
  uiSubscription: Subscription;

  carsDataSubscription: Subscription;
  cars!: any;
  car!: any;

  addCarForm = new FormGroup({
    year: new FormControl('', [
      Validators.required,
      this.validationService.mustBeNumber()
    ]),
    make: new FormControl(''),
    model: new FormControl(''),
    submodel: new FormControl(''),
    drive: new FormControl(''),
    transmission: new FormControl(''),
    fuel: new FormControl(''),
    mileage: new FormControl('', [
      Validators.required,
      this.validationService.mustBeNumber()
    ])
  })

  constructor(private uiService: UiService, private validationService: ValidationService, private pageDataService: PageDataService) {
    this.uiSubscription = this.uiService
      .onToggle()
      .subscribe((value) => this.showAddCar = value);
    this.carsDataSubscription = this.pageDataService
      .getCars()
      .subscribe(value => this.setCars(value))
  }

  ngOnInit(): void {
  }

  setCars(value: any){
    this.cars = value
    console.log(this.cars)
  }

  get addCarFormControl() {
    return this.addCarForm.controls;
  }

  yearChoice(){
    let years = [];
    let i = 2021;
    for (i; i > 1940; i--){
      years.push(i);
    }
    return years
  }

  onSubmit() {
    if (this.addCarForm.valid) {

      // because we manipulate ngValue, we need to reset the values to the string representation before its sent to the db
      this.addCarForm.controls.make.setValue(this.addCarForm.controls.make.value.make)
      this.addCarForm.controls.model.setValue(this.addCarForm.controls.model.value.name)
      let car = this.addCarForm.value;
      car.ownerId = localStorage.getItem('user-id');
      // send the car
      this.onAddCar.emit(car);
      this.addCarForm.reset();
    }
  }
}
