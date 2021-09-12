import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {

  showAddParts: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAddPart(): void {
    this.showAddParts = !this.showAddParts;
  }

  pushPart(): void {
    
  }

}
