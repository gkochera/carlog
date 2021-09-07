import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PageDataService {
  private apiUrl = 'http://localhost:5000/api/sitedata';

  constructor(private http:HttpClient) { }

  getMakes(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/makes')
  }
}
