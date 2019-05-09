import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HRDataService{
   private workers = new Array<any>();
   private workersDataToView = new BehaviorSubject<Array<any>>([]);
   private absence = new Array<any>();
   private absenceDataToView = new BehaviorSubject<Array<any>>([]);
   private absenceHistory = new Array<any>();
   private absenceHistoryDataToView = new BehaviorSubject<Array<any>>([]);



  workersUrl = 'https://localhost:5001/api/hrdata/workers';
  absenceUrl = 'https://localhost:5001/api/hrdata/absences';
  absenceHistoryUrl = 'https://localhost:5001/api/hrdata/absenceshistory';
  constructor(private http: HttpClient) { }

  LoadData(): void {

    this.http.get<Array<any>>(this.workersUrl).subscribe(workersData => {
      this.workers = workersData.slice();
      this.workersDataToView.next(this.workers);
    });

    this.http.get<Array<any>>(this.absenceUrl).subscribe(absenceData => {
      this.absence = absenceData.slice();
      this.absenceDataToView.next(this.absence);
    });

    this.http.get<Array<any>>(this.absenceHistoryUrl).subscribe(absenceHistoryData => {
      this.absenceHistory = absenceHistoryData.slice();
      this.absenceHistoryDataToView.next(this.absenceHistory);
    });


}


  GetWorkersData() {
    return this.workersDataToView.asObservable();
  }
  GetAbsenceData() {
    return this.absenceDataToView.asObservable();
  }
  GetAbsenceHistoryData() {
    return this.absenceHistoryDataToView.asObservable();
  }

}
