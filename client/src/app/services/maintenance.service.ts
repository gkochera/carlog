import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Part } from '../Part';
import { Car } from '../Car';
import { User } from '../User';
import { Maintenance } from '../Maintenance';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MaintenanceService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  addMaintenance(maintenance: Maintenance): Observable<Car> {
    let endpoint = `${this.apiUrl}/cars/${maintenance.carid}/maintenance`
    return this.http.post<Car>(endpoint, maintenance, httpOptions);
  }
}