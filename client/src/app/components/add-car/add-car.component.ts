import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../Car'
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

  makesDataSubscription: Subscription;
  makes!: any;

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
    this.makesDataSubscription = this.pageDataService
      .getMakes()
      .subscribe((value) => this.makes = value.makes)
  }

  ngOnInit(): void {
  }

  get addCarFormControl() {
    return this.addCarForm.controls;
  }

  onSubmit() {
    if (this.addCarForm.valid) {
      this.onAddCar.emit(this.addCarForm.value);
      this.addCarForm.reset();
    }
  }
}
