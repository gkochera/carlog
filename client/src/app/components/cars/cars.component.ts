import { Component, OnInit } from '@angular/core';
import { Car } from '../../Car'


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    cars: Car[] = CARS;

  constructor() { }

  ngOnInit(): void {
  }

}
