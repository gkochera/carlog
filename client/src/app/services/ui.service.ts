import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddCar: boolean = false;
  private showAddPart: boolean = false;
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

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
