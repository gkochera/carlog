import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../Car'
import { CARS } from '../mock-cars'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:5000/cars';

  constructor(private http:HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
  }

  deleteCar(car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${car.id}`
    return this.http.delete<Car>(url);
  }
}
