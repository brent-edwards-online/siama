import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'angular2-ui-switch/src/index';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { routes } from './app.router';
import { RouterModule } from '@angular/router'; 
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SideBarComponent } from './component/shared/side-bar/side-bar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReportComponent } from './component/report/report.component';
import { NetworkComponent } from './component/network/network.component';
import { SettingsComponent } from './component/settings/settings.component';
import { BridgeHealthComponent } from './component/bridge-health/bridge-health.component';
import { InspectionReportComponent } from './component/report/inspection-report/inspection-report.component';

import { InspectionReportService } from './service/inspection-report.service';
import { UploadService } from './service/upload.service';

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
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    routes,
    DatepickerModule.forRoot(),
    UiSwitchModule,
    RouterModule
  ],
  providers: [InspectionReportService, UploadService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AppComponent,HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
