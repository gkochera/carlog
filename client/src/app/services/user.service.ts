import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, of, throwError } from 'rxjs';
import { User } from '../User';
import { CarComponent } from '../pages/cars/car/car.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';
  constructor(private http: HttpClient) { }
    
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl)
    }

    deleteUser(user: User): Observable<User> {
      const url = `${this.apiUrl}/${user._id}`;
      return this.http.delete<User>(url);
    }

    addUser(user: User): Observable<User> {
      let result = this.http.post<User>(this.apiUrl, user, httpOptions)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })

      )
      return result;
    }

    loginUser(email: string): Observable<User> {
      let body = {email}
      let result = this.http.post<User>('http://localhost:5000/api/login', body, httpOptions)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })

      )
      return result;
    }

}
