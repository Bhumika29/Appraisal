import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { UserdataService } from '../core/services/userdata/userdata.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanLoad {
  userstatus = '';
  constructor(private router: Router, private userdata: UserdataService) {
  }

  canLoad(route: Route): boolean {
    /*const url: string = route.path;
    console.log('Url:' + url);
    this.userdata.currentUserstatus.subscribe(userstatus => this.userstatus = userstatus);
    if ((url === 'employee' && this.userstatus !== 'Employee') ||
     (url === 'admin' && this.userstatus !== 'Trainee')) {
      alert('You are not authorised to visit this page');
      return false;
    }*/
    return true;
  }
}
