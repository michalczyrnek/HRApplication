import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { HRDataService } from '../Services/HRData.service';


@Component({
  selector: 'app-newabsence',
  templateUrl: './newabsence.component.html',
  styleUrls: ['./newabsence.component.css']
})
export class NewabsenceComponent implements OnInit {
  NewAbsenceAsset: any = {};
  workers = [];
  isL4:boolean = false;
  selectedWorker;
  AbsenceStart = new FormControl(new Date());
  AbsenceEnd = new FormControl(new Date());

  statusMessage: string = "Status: ";

  @Output()
  NewAbsenceEvent = new EventEmitter<string>();

  constructor(private data: HRDataService) { }

  ngOnInit() {
    this.data.GetWorkersData().subscribe(data => {
      this.workers = data.slice();
    });
  }

  AddAbsence() {
    if (this.selectedWorker != null) {
      this.NewAbsenceAsset.worker = this.selectedWorker;
      this.NewAbsenceAsset.AbsenceStart = this.AbsenceStart.value;
      this.NewAbsenceAsset.AbsenceEnd = this.AbsenceEnd.value;
      this.NewAbsenceAsset.AbsenceStart.setHours(22);
      this.NewAbsenceAsset.AbsenceEnd.setHours(22);
      this.NewAbsenceAsset.isL4=this.isL4;

      this.data.AddNewAbsence(this.NewAbsenceAsset).subscribe(
        () => { console.log('New absence added'); this.statusMessage = "Status: Success"; },
        error => {
          console.log(error);
          this.statusMessage = "Status: " + error;
        });

      this.NewAbsenceEvent.emit("reload");
    }

  }



}



