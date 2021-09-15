import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car!: Car

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) {
    this.carService.getCar(this.route.snapshot.params['carid']).subscribe((car) => {this.car = car; console.log(this.car)})
  }

  ngOnInit(): void {
  }

  backToGarage(): void {
    this.router.navigate(['garage'])
  }
}
