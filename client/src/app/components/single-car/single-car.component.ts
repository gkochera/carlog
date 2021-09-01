import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/Car';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
  @Input() car!: Car;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
