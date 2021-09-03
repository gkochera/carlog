import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../../Car'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})


export class AddCarComponent implements OnInit {
  @Output() onAddCar: EventEmitter<Car> = new EventEmitter;
  year!: number;
  make!: string;
  model!: string;
  submodel: string = "";
  drive!: string;
  transmission!: string;
  fuel!: string;
  mileage!: number;
  showAddCar!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.showAddCar = value)

  }

  ngOnInit(): void {
  }

  onSubmit() {
    
    const newCar = {
      year: this.year,
      make: this.make,
      model: this.model,
      submodel: this.submodel,
      drive: this.drive,
      transmission: this.transmission,
      fuel: this.fuel,
      mileage: this.mileage
    }

    this.year = 0;
    this.make = '';
    this.model = '';
    this.submodel = '';
    this.drive = '';
    this.transmission = '';
    this.fuel = '';
    this.mileage = 0;

    this.onAddCar.emit(newCar);
  }

}
