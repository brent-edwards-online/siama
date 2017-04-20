import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReportComponent } from './component/report/report.component';
import { InspectionReportComponent } from './component/report/inspection-report/inspection-report.component';
import { NetworkComponent } from './component/network/network.component';
import { SettingsComponent } from './component/settings/settings.component';
import { BridgeHealthComponent } from './component/bridge-health/bridge-health.component';

//import { AuthenticationRouteGuard } from './routeguards/authentication.routeguard';

export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'report', component: ReportComponent },
    { path: 'report/:inspectionNo', component: InspectionReportComponent },
    { path: 'bridgehealth', component: BridgeHealthComponent },
    { path: 'network', component: NetworkComponent },
    { path: 'settings', component: SettingsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);