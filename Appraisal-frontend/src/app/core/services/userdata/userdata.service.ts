import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor() { }
  private userSource = new BehaviorSubject(new SocialUser());
  private userstatusSource = new BehaviorSubject('');
  currentUser = this.userSource.asObservable();
  currentUserstatus = this.userstatusSource.asObservable();
  signInUser(user: SocialUser, userstatus: string) {
    this.userSource.next(user);
    this.userstatusSource.next(userstatus);
  }
}
