import { NgModule } from '@angular/core';

import { EmployeeComponent } from './components/employee.component';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { PayslipComponent} from './components/payslip/payslip.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';
import {DownloadExhibitComponent} from './components/download-exhibit/download-exhibit.component';
import {DownloadslipComponent} from './components/downloadslip/downloadslip.component';
const routes: Routes = [
    {
        path: '', component: EmployeeComponent,
        children : [{
            path: 'dashboard', component: DashboardComponent
        },
        {
            path: 'payslip', component: PayslipComponent
        },
        {
            path: 'exhibit', component: ExhibitComponent
        },
        {
            path: 'downloadexhibit', component: DownloadExhibitComponent
        },
        {
            path: 'viewslip', component: DownloadslipComponent
        }
    ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class EmployeeRoutingModule { }
