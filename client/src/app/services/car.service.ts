import { Injectable } from '@angular/core';
import { Car } from '../Car'
import { CARS } from '../mock-cars'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Car[] {
    return CARS
  }
}
