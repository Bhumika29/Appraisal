import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { DisplayListTemplatesComponent } from './components/templates/display-list-templates/display-list-templates.component';
import { SharedModule } from '../shared';
import { SuperadminComponent } from './components/superadmin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProvideAccessComponent } from './components/provide-access/provide-access.component';

@NgModule({
  declarations: [
    DisplayListTemplatesComponent,
    SuperadminComponent,
    DashboardComponent,
    ProvideAccessComponent,
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    SharedModule
  ]
})
export class SuperadminModule { }
