import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddCar: boolean = false;
  private showAddPart: boolean = false;
  private showAddUser: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddCar(): void {
    this.showAddCar = !this.showAddCar;
    this.subject.next(this.showAddCar);
  }

  toggleAddPart(): void {
    this.showAddPart = !this.showAddPart;
    this.subject.next(this.showAddPart);
  }

  toggleAddUser(): void {
    this.showAddUser = !this.showAddUser;
    this.subject.next(this.showAddUser);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
