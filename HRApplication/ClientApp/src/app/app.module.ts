import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HRDataService } from './Services/HRData.service';
import { WorkersdataComponent } from './workersdata/workersdata.component';
import { AbsencedataComponent } from './absencedata/absencedata.component';
import { AbsencehistorydataComponent } from './absencehistorydata/absencehistorydata.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      WorkersdataComponent,
      AbsencedataComponent,
      AbsencehistorydataComponent
   ],
   imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([WorkersdataComponent,AbsencedataComponent, AbsencehistorydataComponent])

  ],
  providers: [HRDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
