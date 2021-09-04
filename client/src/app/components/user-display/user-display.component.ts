import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  @Input() users!: User[];

  constructor() {
   }

  ngOnInit(): void {
  }
}
