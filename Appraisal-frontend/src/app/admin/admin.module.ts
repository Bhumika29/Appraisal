import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './components/admin.component';
import { ApplyAppraisalComponent } from './components/apply-appraisal/apply-appraisal.component';
import { DueAppraisalComponent } from './components/due-appraisal/due-appraisal.component';
import { SharedModule } from '../shared';


@NgModule({

  declarations: [
    AdminComponent,
    ApplyAppraisalComponent,
    DueAppraisalComponent,
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]

})
export class AdminModule { }
