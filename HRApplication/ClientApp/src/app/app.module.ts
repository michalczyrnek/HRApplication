import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HRDataService } from './Services/HRData.service';
import { WorkersdataComponent } from './workersdata/workersdata.component';
import { AbsencedataComponent } from './absencedata/absencedata.component';
import { AbsencehistorydataComponent } from './absencehistorydata/absencehistorydata.component';
import { NewabsenceComponent } from './newabsence/newabsence.component';

import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';





@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      WorkersdataComponent,
      AbsencedataComponent,
      AbsencehistorydataComponent,
      NewabsenceComponent
   ],
   imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([WorkersdataComponent,AbsencedataComponent, AbsencehistorydataComponent]),
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [HRDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
