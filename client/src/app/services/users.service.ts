import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl = 'http://localhost:5000/api/users';
  constructor(private http: HttpClient) { }
    
    getParts(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl)
    }

    deleteCar(user: User): Observable<User> {
      const url = `${this.apiUrl}/${user._id}`;
      return this.http.delete<User>(url);
    }

    addPart(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrl, user, httpOptions);
    }

}
