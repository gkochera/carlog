import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Part } from 'src/app/Part';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {
  subscription!: Subscription;
  showAddPart!: boolean;
  @Output() onAddPart: EventEmitter<Part> = new EventEmitter;
  manufacturer!: string;
  partNumber!: string;
  cost!: string;
  datePurchased!: string;
  description!: string;
  notes!: string;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.showAddPart = value)

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newPart = {
      manufacturer: this.manufacturer,
      partNumber: this.partNumber,
      cost: this.cost,
      datePurchased: this.datePurchased,
      description: this.description,
      notes: this.notes
    }

    this.manufacturer = '';
    this.partNumber = '';
    this.cost = '';
    this.datePurchased = '';
    this.description = '';
    this.notes = '';

    this.onAddPart.emit(newPart);
  }

}
