import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-function',
  templateUrl: './car-function.component.html',
  styleUrls: ['./car-function.component.css']
})
export class CarFunctionComponent implements OnInit {

  @Input() action: string = '';
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  color: string = 'gray'
  text: string = 'null'

  constructor() { }

  ngOnInit(): void {
    switch (this.action) {
      case "delete":
        this.color = 'red';
        this.text = 'Delete';
        break;
      case "edit":
        this.color = 'blue';
        this.text = 'Edit';
        break;
      case "service":
        this.color = 'gray';
        this.text = 'Service'
    }   
  }

  doAction(): void {
    this.onClick.emit(this.action);
  }

}
