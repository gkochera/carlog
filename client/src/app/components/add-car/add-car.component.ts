import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../../Car'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})


export class AddCarComponent implements OnInit {
  @Output() onAddCar: EventEmitter<Car> = new EventEmitter;

  showAddCar!: boolean;
  subscription: Subscription;

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

  constructor(private uiService: UiService, private validationService: ValidationService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.showAddCar = value)

  }

  ngOnInit(): void {
  }

  get addCarFormControl() {
    return this.addCarForm.controls;
  }

  onSubmit() {
    this.onAddCar.emit(this.addCarForm.value);
    this.addCarForm.reset();
  }

}
