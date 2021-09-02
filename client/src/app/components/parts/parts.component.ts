import { Component, OnInit } from '@angular/core';
import { Part } from '../../Part'
import { PartService } from 'src/app/services/part.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  subscription!: Subscription;
  parts: Part[] = [];

  constructor(private partService: PartService) { }

  ngOnInit(): void {
    this.partService.getParts().subscribe((parts) => this.parts = parts);
  }

}
