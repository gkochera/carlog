import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent implements OnInit {
  carid: number = this.router.snapshot.params['carid']

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
