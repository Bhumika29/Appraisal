import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserdataService } from '../services/userdata/userdata.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authtoken = '';
  constructor(private userdata: UserdataService) {
    this.userdata.currentUser.subscribe(user => {
      this.authtoken = user.authToken;
    });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authtoken) {
      req = req.clone({
        headers: req.headers.set('Authorization', this.authtoken)
      });
    }
    return next.handle(req);
  }
}
