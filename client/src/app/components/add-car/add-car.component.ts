import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../../Car'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

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
    year: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    submodel: new FormControl(''),
    drive: new FormControl(''),
    transmission: new FormControl(''),
    fuel: new FormControl(''),
    mileage: new FormControl('')
  })

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.showAddCar = value)

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onAddCar.emit(this.addCarForm.value);
    this.addCarForm.reset();
  }

}
