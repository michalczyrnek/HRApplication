import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HRDataService } from './Services/HRData.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule


  ],
  providers: [HRDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
