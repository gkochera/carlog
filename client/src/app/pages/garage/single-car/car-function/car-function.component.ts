import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition, faTimes, faSearch, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';

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
  textColor: string = 'black';
  icon!: IconDefinition;

  constructor() { }

  ngOnInit(): void {
    switch (this.action) {
      case "delete":
        this.color = 'var(--warning-red-light)';
        this.textColor = 'var(--warning-red)'
        this.text = 'Delete';
        this.icon = faTimes;
        break;
      case "edit":
        this.color = 'var(--cool-blue-light)';
        this.textColor = 'var(--cool-blue)';
        this.text = 'Edit';
        this.icon = faCogs;
        break;
      case "service":
        this.color = 'var(--cool-blue-light)';
        this.textColor = 'var(--cool-blue)';  
        this.text = 'Service';
        this.icon = faTools;
        break;
      case "view":
        this.color = 'var(--cool-blue-light)';
        this.textColor = 'var(--cool-blue)';
        this.text = 'View';
        this.icon = faSearch;
        break;
    }   
  }

  doAction(): void {
    this.onClick.emit(this.action);
  }

}
