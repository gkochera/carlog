import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car!: Car

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.carService.getCar(this.route.snapshot.params['carid']).subscribe((car) => {this.car = car; console.log(this.car)})
  }

  ngOnInit(): void {
  }

}
