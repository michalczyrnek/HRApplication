import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HRDataService {
  private workers = new Array<any>();
  private workersDataToView = new BehaviorSubject<Array<any>>([]);
  private absence = new Array<any>();
  private absenceDataToView = new BehaviorSubject<Array<any>>([]);
  private absenceHistory = new Array<any>();
  private absenceHistoryDataToView = new BehaviorSubject<Array<any>>([]);

  private workersUrl = 'https://localhost:5001/api/hrdata/workers';
  private absenceUrl = 'https://localhost:5001/api/hrdata/absences';
  private absenceHistoryUrl = 'https://localhost:5001/api/hrdata/absenceshistory';
  private newAbsenceUrl = 'https://localhost:5001/api/hrdata/newabsence';
  private deleteUrl = 'https://localhost:5001/api/hrdata/deleteabsences';



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

  AddNewAbsence(model: any) {
    return this.http.post(this.newAbsenceUrl, model);
  }

  DeleteAbsences(model: any) {

    return this.http.request('delete',this.deleteUrl,{body:model});

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
