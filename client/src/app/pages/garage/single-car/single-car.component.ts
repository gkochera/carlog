import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/Car';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})

export class SingleCarComponent implements OnInit {
  @Input() car!: Car;
  @Output() onDeleteCar: EventEmitter<Car> = new EventEmitter;
  faCamera = faCamera;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onDelete(car: Car) {
    this.onDeleteCar.emit(car)
  }

  onEdit() {
    console.log("EDIT", this.car) 
  }
  
  onService() {
    this.router.navigate([this.car._id, 'maintenance'], {relativeTo: this.route})
  }

  onView() {
    this.router.navigate([this.car._id], {relativeTo: this.route})
  }
}
