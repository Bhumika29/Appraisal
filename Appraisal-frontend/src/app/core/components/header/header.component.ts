import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata/userdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: AuthService, private userdata: UserdataService, private router: Router) {
  }
  toggle = false;
  loggedIn = false;
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (!this.loggedIn) {
        this.userdata.signInUser(this.user, '');
        this.router.navigate(['']);
      }
    });
  }
  onClick() {
    this.toggle = !this.toggle;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
