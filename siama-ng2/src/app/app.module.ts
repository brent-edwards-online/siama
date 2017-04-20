﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { routes } from './app.router';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SideBarComponent } from './component/shared/side-bar/side-bar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReportComponent } from './component/report/report.component';
import { NetworkComponent } from './component/network/network.component';
import { SettingsComponent } from './component/settings/settings.component';
import { BridgeHealthComponent } from './component/bridge-health/bridge-health.component';
import { InspectionReportComponent } from './component/report/inspection-report/inspection-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    ReportComponent,
    NetworkComponent,
    SettingsComponent,
    BridgeHealthComponent,
    InspectionReportComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }