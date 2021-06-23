import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopcupService } from './popcup.service';
import { CovidServiceService } from './covid-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NavComponent } from './nav/nav.component';  
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CovidInfoComponent,
    NavComponent,
    TableComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule  
    
  ],
  providers: [
    MarkerService,
    PopcupService,
    CovidServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
