import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuperadminComponent} from '../superadmin/components/superadmin.component';
import { DisplayListTemplatesComponent } from './components/templates/display-list-templates/display-list-templates.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: SuperadminComponent,
        children: [
            {path: 'displaylist', component: DisplayListTemplatesComponent},
            {path: 'dashboard', component: DashboardComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class SuperadminRoutingModule { }
