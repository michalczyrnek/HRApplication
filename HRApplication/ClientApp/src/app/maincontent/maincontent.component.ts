import { Component, OnInit } from '@angular/core';
import { HRDataService } from '../Services/HRData.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  content: Array<any> = new Array<any>();



  constructor(private workersdata: HRDataService) { }

  ngOnInit() {

    this.workersdata.GetData().subscribe(data => {
      this.content = data.slice();
    });


  }

}
