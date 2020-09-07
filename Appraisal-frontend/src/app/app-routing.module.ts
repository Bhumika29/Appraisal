import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService} from './auth/authguard.service';
import {NotfoundComponent} from './not-found.component';
import {HomeComponent} from './home/components/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule), canLoad: [AuthguardService]},
  {path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthguardService]},
  // tslint:disable-next-line: max-line-length
  {path : 'superadmin', loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule), canLoad: [AuthguardService]},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
