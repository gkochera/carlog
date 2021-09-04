import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  subscription!: Subscription;
  users: User[] = [];
  showAddUser!: boolean;

  constructor(private userService: UserService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddUser = value)
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => this.users = users)
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe((user) => {
      this.users.push(user);
    })
  }

  deleteUser(user: User) {
    this.userService
    .deleteUser(user)
    .subscribe(() => this.users = this.users.filter(u => u._id !== user._id))
  }

  toggleAddUser() {
    this.uiService.toggleAddUser()
  }
}
