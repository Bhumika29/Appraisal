import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin.component';
import { ApplyAppraisalComponent } from './components/apply-appraisal/apply-appraisal.component';
import { DueAppraisalComponent } from './components/due-appraisal/due-appraisal.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children : [
            {path: 'dueappraisal', component: DueAppraisalComponent},
            {path: 'applyappraisal', component: ApplyAppraisalComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
