import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})

export class UserDisplayComponent implements OnInit {
  @Input() users!: User[];
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user: User) {
    this.onDeleteUser.emit(user);
  }
}
