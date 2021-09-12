import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../Car'
import { Maintenance } from '../Maintenance';
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

  getCar(carid: string): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + '/' + carid)
  }

  deleteCar(car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${car._id}`;
    return this.http.delete<Car>(url);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, httpOptions);
  }

  getMaintenance(car: Car): Observable<Maintenance[]> {
    return this.http.get<Maintenance[]>(this.apiUrl + '/' + car._id + '/maintenance')
  }
}
