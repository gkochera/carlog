import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/Car';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
  @Input() car!: Car;
  @Output() onDeleteCar: EventEmitter<Car> = new EventEmitter;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(car: Car) {
    this.onDeleteCar.emit(car)
  }
}
