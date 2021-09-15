import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maintenance } from 'src/app/Maintenance';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent implements OnInit {
  carid: string = this.router.snapshot.params['carid']
  maintenances: Maintenance[] = []
  
  constructor(
    private maintenanceService: MaintenanceService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAddMaintenance(newMaintenance: Maintenance): void {
    this.maintenanceService
      .addMaintenance(newMaintenance)
      .subscribe((car) => {
        
      });
  }

}
