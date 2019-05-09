import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HRDataService } from '../Services/HRData.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  absencesActive = true;
  absencesHistoryActive = false;
  workersActive = false;



  @Output()
  activeTabEvent = new EventEmitter<number>();


  constructor(private dataserviece: HRDataService) { }

  ngOnInit() {
  }



  GetAbsences() {

    this.workersActive = false;
    this.absencesActive = true;
    this.absencesHistoryActive = false;
    this.activeTabEvent.emit(1);
  }

  GetAbsencesHistory() {

    this.workersActive = false;
    this.absencesActive = false;
    this.absencesHistoryActive = true;
    this.activeTabEvent.emit(2);
  }

  GetWorkers() {

    this.workersActive = true;
    this.absencesActive = false;
    this.absencesHistoryActive = false;
    this.activeTabEvent.emit(3);
    
  }

}
