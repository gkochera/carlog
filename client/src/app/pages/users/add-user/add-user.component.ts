import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  subscription!: Subscription;
  @Output() onAddUser: EventEmitter<User> = new EventEmitter;
  firstName!: string;
  lastName!: string;
  email!: string;
  joinDate!: Date;
  showAddUser!: boolean;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.showAddUser = value)

  }

  ngOnInit(): void {
  }

  onSubmit() {
    let now = new Date();

    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      joinDate: now
    }

    this.firstName = '';
    this.lastName = '';
    this.email = '';

    this.onAddUser.emit(newUser);
  }
  

}
