import { Component, OnInit } from '@angular/core';
import { HRDataService } from '../Services/HRData.service';



@Component({
  selector: 'app-absencedata',
  templateUrl: './absencedata.component.html',
  styleUrls: ['./absencedata.component.css']
})
export class AbsencedataComponent implements OnInit {

  private gridApi;
  rowSelection = 'multiple';
  columnDefs = [

    {headerName: 'Name', field: 'name',  width: 150},
    {headerName: 'ID', field: 'workerID', width: 60},
    {headerName: 'Position', field: 'position',  width: 150},
    {headerName: 'Absence Start', field: 'absenceStart', width: 150, valueFormatter: dateFormatter},
    {headerName: 'Absence End', field: 'absenceEnd', width: 150, valueFormatter: dateFormatter },
    { headerName: 'Absence Type', field: 'l4', width: 150, valueFormatter: absenceTypeFormatter}

];
rowData = [];


  constructor(private data: HRDataService) { }

  ngOnInit() {
    this.data.GetAbsenceData().subscribe(data => {
      this.rowData = data.slice();

  });
}

Reload(event){

  setTimeout( ()=>{

    console.log(event);
    this.data.LoadData();

  }, 2000);



}

  ApplyDelete() {
    
    var absencesToRemove = this.gridApi.getSelectedRows();
    this.data.DeleteAbsences(absencesToRemove).subscribe(
      () => { console.log('Delete completed') },
      error =>
      {
        console.log(error);
      });


    this.Reload("Reload after delete");

  }

  onGridReady(params:any){
    this.gridApi = params.api;
  }

}



function dateFormatter (params){
  return params.value.toString().substring(0,10);
}

function absenceTypeFormatter(params) {

  if (params.value) {
    return "L4";
  }
  else {
    return "Normal";
  }
}
