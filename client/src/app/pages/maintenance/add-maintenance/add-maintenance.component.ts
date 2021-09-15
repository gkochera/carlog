import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Part } from 'src/app/Part';
import { Maintenance } from 'src/app/Maintenance';
import { FormGroup, FormControl } from '@angular/forms';
  
  
@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {

  showAddParts: boolean = false;
  parts: Part[] = []
  @Output() onAddMaintenance: EventEmitter<Maintenance> = new EventEmitter;
  @Input() carid: string = '';


  maintenanceForm = new FormGroup({
    date: new FormControl(''),
    type: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  showAddPart(): void {
    this.showAddParts = !this.showAddParts;
  }

  pushPart(part: Part): void {
    this.parts.push(part)
    console.log(this.parts);
  }

  onSubmit(): void {
    console.log("Submit")
    let newMaintenance: Maintenance = {
      date: this.maintenanceForm.controls.date.value,
      type: this.maintenanceForm.controls.date.value,
      parts: this.parts,
      carid: this.carid
    }
    this.onAddMaintenance.emit(newMaintenance)
  }

  onReset(): void {
    console.log("Reset")
  }

  onCancel(): void {
    console.log("Cancel")
  }

}
