import { Component, OnInit } from '@angular/core';
import { HRDataService } from '../Services/HRData.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  workersActive = false;
  absencesActive = false;
  absenceHistoryActive = false;


  constructor(private dataserviece: HRDataService) { }

  ngOnInit() {
  }

  GetWorkers() {
    this.dataserviece.GetWorkersData();
    this.workersActive = true;
    this.absencesActive = false;
    this.absenceHistoryActive = false;
  }

}
