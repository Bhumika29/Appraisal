import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from './components/employee.component';
import { SharedModule } from '../shared';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { ExhibitComponent } from './components/exhibit/exhibit.component';
import { DownloadExhibitComponent } from './components/download-exhibit/download-exhibit.component';
import { DownloadslipComponent } from './components/downloadslip/downloadslip.component';

@NgModule({

  declarations: [
    EmployeeComponent,
    DashboardComponent,
    PayslipComponent,
    ExhibitComponent,
    DownloadExhibitComponent,
    DownloadslipComponent
  ],

  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]

})
export class EmployeeModule { }
