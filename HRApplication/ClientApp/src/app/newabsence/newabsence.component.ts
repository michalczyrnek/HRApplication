import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl,  } from '@angular/forms';
import { HRDataService } from '../Services/HRData.service';


@Component({
  selector: 'app-newabsence',
  templateUrl: './newabsence.component.html',
  styleUrls: ['./newabsence.component.css']
})
export class NewabsenceComponent implements OnInit {
  NewAbsenceAsset: any = {};
  workers =[];
  selectedWorker;
  AbsenceStart = new FormControl (new Date());
  AbsenceEnd = new FormControl (new Date());

  @Output()
  NewAbsenceEvent = new EventEmitter<string>();

  constructor(private data: HRDataService) { }

  ngOnInit() {
    this.data.GetWorkersData().subscribe(data =>{
      this.workers=data.slice();
    });
  }

  AddAbsence(){
  this.NewAbsenceAsset.worker=this.selectedWorker;
  this.NewAbsenceAsset.AbsenceStart=this.AbsenceStart.value;
this.NewAbsenceAsset.AbsenceEnd=this.AbsenceEnd.value;

    this.data.AddNewAbsence(this.NewAbsenceAsset).subscribe(
    () => { console.log('New absence added') },
    error =>
    {
      console.log(error);
    });

    this.NewAbsenceEvent.emit("reload");

  }



}



