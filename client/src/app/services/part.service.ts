import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Part } from '../Part';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PartService {
  private apiUrl = 'http://localhost:5000/api/parts';

  constructor(private http: HttpClient) { }

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiUrl)
  }

  deleteCar(part: Part): Observable<Part> {
    const url = `${this.apiUrl}/${part._id}`;
    return this.http.delete<Part>(url);
  }

  addPart(part: Part): Observable<Part> {
    return this.http.post<Part>(this.apiUrl, part, httpOptions);
  }
}
