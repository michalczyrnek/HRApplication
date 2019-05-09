import { Component, OnInit } from '@angular/core';
import { HRDataService } from './Services/HRData.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  absencesActive = true;
  absencesHistoryActive = false;
 workersActive = false;

constructor(private dataservice: HRDataService){}

ngOnInit(){
  this.dataservice.LoadData();
}

selectedTab(selected: number){

switch (selected){

  case 1:
  this.absencesActive = true;
  this.absencesHistoryActive = false;
 this.workersActive = false;
break;
case 2:
  this.absencesActive = false;
  this.absencesHistoryActive = true;
 this.workersActive = false;
break;
case 3:
  this.absencesActive = false;
  this.absencesHistoryActive = false;
 this.workersActive = true;
break;

}
}
}
