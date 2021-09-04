import { Component, OnInit, Input } from '@angular/core';
import { Part } from 'src/app/Part';

@Component({
  selector: 'app-parts-display',
  templateUrl: './parts-display.component.html',
  styleUrls: ['./parts-display.component.css']
})
export class PartsDisplayComponent implements OnInit {
  
  @Input() parts!: Part[];

  constructor() { }

  ngOnInit(): void {
  }
}
