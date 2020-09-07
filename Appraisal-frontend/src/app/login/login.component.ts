import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserdataService } from '../core/services/userdata/userdata.service';
import { ApiService } from '../core/services/api/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(private api: ApiService, private userdata: UserdataService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        // this.user.email = 'rpatel@argusoft.com';
        this.user.email = 'ragrawal@argusoft.com';
        if ((this.user.email.split('@')[1]).split('.')[0] === 'argusoft') {
          this.api.checkuser(user.email, user.authToken).subscribe((Userstatus) => {
            if (Userstatus.valid) {
              if (Userstatus.status === 'Trainee') {
                this.router.navigate(['admin']);
                this.userdata.signInUser(this.user, Userstatus.status);
              } else {
                this.router.navigate(['employee']);
                this.userdata.signInUser(this.user, Userstatus.status);
              }
            } else {
              this.router.navigate(['not-found']);
            }
          });
        } else {
          this.router.navigate(['not-found']);
        }
      }
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
