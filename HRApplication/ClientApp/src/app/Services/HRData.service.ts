import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HRDataService {
  workers = new Array<any>();
  dataToView = new BehaviorSubject<Array<any>>([]);

  baseUrl = 'https://localhost:5001/api/HRData';
  constructor(private http: HttpClient) { }

  GetWorkersData() {
    this.http.get<Array<any>>(this.baseUrl).subscribe(workersData => {
      this.workers = workersData.slice();
      this.dataToView.next(this.workers);
    });
  }

  GetData() {
    return this.dataToView.asObservable();
  }
}
