import { Component, OnInit } from '@angular/core';
import { Part } from '../../Part'
import { PartService } from 'src/app/services/part.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  subscription!: Subscription;
  parts: Part[] = [];
  showAddPart!: boolean;

  constructor(private partService: PartService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddPart = value)
   }

  ngOnInit(): void {
    this.partService.getParts().subscribe((parts) => this.parts = parts);
  }

  addPart(part: Part) {
    this.partService.addPart(part).subscribe((parts) => this.parts.push(part))
    console.log(part)
  }

  toggleAddPart() {
    this.uiService.toggleAddPart()
  }
}
