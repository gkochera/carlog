import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addPart(): void {
    console.log('Part Added!')
  }

}
