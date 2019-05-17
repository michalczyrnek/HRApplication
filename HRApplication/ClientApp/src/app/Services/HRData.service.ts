import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  baseUrl: string;
  private workersUrl = this.baseUrl + '/api/hrdata/workers';
  private absenceUrl = this.baseUrl + '/api/hrdata/absences';
  private  absenceHistoryUrl = this.baseUrl + '/api/hrdata/absenceshistory';
  private  newAbsenceUrl = this.baseUrl+ '/api/hrdata/newabsence';
  private  deleteUrl = this.baseUrl + '/api/hrdata/deleteabsences';




  constructor(private http: HttpClient) {
    this.baseUrl = window.location.origin;
    this.workersUrl = this.baseUrl + '/api/hrdata/workers';
    this.absenceUrl = this.baseUrl + '/api/hrdata/absences';
    this.absenceHistoryUrl = this.baseUrl + '/api/hrdata/absenceshistory';
    this.newAbsenceUrl = this.baseUrl + '/api/hrdata/newabsence';
    this.deleteUrl = this.baseUrl + '/api/hrdata/deleteabsences';

  }

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
