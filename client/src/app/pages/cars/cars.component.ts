import { Component, OnInit } from '@angular/core';
import { Car } from '../../Car'
import { CarService } from 'src/app/services/car.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
    showAddCar!: boolean;
    subscription!: Subscription;
    cars: Car[] = [];
    userId: String = <String>localStorage.getItem('user-id');

  constructor(private carSerivce: CarService, private uiService: UiService) {
      this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddCar = value)
   }

  ngOnInit(): void {
    if (this.userId !== null) {
      this.carSerivce.getUserCars(this.userId).subscribe((cars) => {
        this.cars = cars;
      })
    } else {
      this.carSerivce.getCars().subscribe((cars) => {
        this.cars = cars;
      })
    }
    
  }

  deleteCar(car: Car) {
    this.carSerivce
    .deleteCar(car)
    .subscribe(() => this.cars = this.cars.filter(c => c._id !== car._id))
  }

  addCar(car: Car) {
    this.carSerivce.addCar(car).subscribe((cars) => this.cars.push(car))
  }

  toggleAddCar() {
    this.uiService.toggleAddCar()
  }
}
