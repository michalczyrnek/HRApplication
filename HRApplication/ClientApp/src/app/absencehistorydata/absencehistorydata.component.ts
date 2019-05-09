import { Component, OnInit } from '@angular/core';
import { HRDataService } from '../Services/HRData.service';

@Component({
  selector: 'app-absencehistorydata',
  templateUrl: './absencehistorydata.component.html',
  styleUrls: ['./absencehistorydata.component.css']
})
export class AbsencehistorydataComponent implements OnInit {
  columnDefs = [

    {headerName: 'Worker ID', field: 'workerID', width: 100},
    {headerName: 'Name', field: 'name',  width: 150},
    {headerName: 'Position', field: 'position',  width: 150},
    {headerName: 'Absence Start', field: 'absenceStart', width: 150, valueFormatter: dateFormatter},
    {headerName: 'Absence End', field: 'absenceEnd', width: 150, valueFormatter: dateFormatter}
];
rowData = [];

  constructor(private data: HRDataService) { }

  ngOnInit() {
    this.data.GetAbsenceHistoryData().subscribe(data => {
      this.rowData = data.slice();
  });


}
}

function dateFormatter (params){
  return params.value.toString().substring(0,10);
}
