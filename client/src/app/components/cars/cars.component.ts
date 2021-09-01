import { Component, OnInit } from '@angular/core';
import { Car } from '../../Car'
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    cars: Car[] = [];

  constructor(private carSerivce: CarService) { }

  ngOnInit(): void {
    this.carSerivce.getCars().subscribe((cars) => this.cars = cars)
  }

  deleteCar(car: Car) {
    this.carSerivce
    .deleteCar(car)
    .subscribe(() => this.cars = this.cars.filter(c => c.id !== car.id))
  }

}
