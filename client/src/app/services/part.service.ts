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
  private apiUrl = 'http://localhost:5000/parts';

  constructor(private http: HttpClient) { }

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiUrl)
  }

  addPart(part: Part): Observable<Part> {
    return this.http.post<Part>(this.apiUrl, part, httpOptions);
  }
}
