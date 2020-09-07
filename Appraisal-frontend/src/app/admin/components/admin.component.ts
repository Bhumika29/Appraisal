import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../core/services/userdata/userdata.service';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: SocialUser;
  constructor(private userdata: UserdataService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userdata.currentUser.subscribe(user => this.user = user);
  }
}
