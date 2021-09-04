import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../Car'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private apiUrl = 'http://localhost:5000/api/cars';

  constructor(private http:HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
  }

  deleteCar(car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${car._id}`;
    console.log(url)
    return this.http.delete<Car>(url);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, httpOptions);
  }
}
