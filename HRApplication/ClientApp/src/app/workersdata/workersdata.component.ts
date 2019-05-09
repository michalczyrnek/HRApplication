import { Component, OnInit } from '@angular/core';
import { HRDataService } from '../Services/HRData.service';

@Component({
  selector: 'app-workersdata',
  templateUrl: './workersdata.component.html',
  styleUrls: ['./workersdata.component.css']
})
export class WorkersdataComponent implements OnInit {
  columnDefs = [
    {headerName: 'ID', field: 'id', width: 60},
    {headerName: 'Name', field: 'name', width: 150},
    {headerName: 'Position', field: 'position', width: 150}
];
rowData = [];

  constructor(private data: HRDataService) { }

  ngOnInit() {
    this.data.GetWorkersData().subscribe(data => {
      this.rowData = data.slice();
  });

}
}
