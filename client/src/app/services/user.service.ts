import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable, of, throwError } from 'rxjs';
import { User } from '../User';
import { CarComponent } from '../pages/garage/car/car.component';

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

    loginUser(email: string): Observable<any> {
      let body = {email}
      let result = this.http.post<any>('http://localhost:5000/api/login', body, httpOptions)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
        ,map((user) => {
          localStorage.setItem('carlog-jwt', JSON.stringify(user.token));
          localStorage.setItem('carlog-user', JSON.stringify(user.data.email));
        })
      )
      return result;
  }
}
