import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home';
import {NotfoundComponent} from './not-found.component';
import { AuthguardService } from './auth/authguard.service';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent} from './core/components/header/header.component';
import { FooterComponent} from './core/components/footer/footer.component';
import {SidebarComponent} from './core/components/sidebar/sidebar.component'
import { CoreModule } from './core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent, NotfoundComponent, HeaderComponent , FooterComponent, LoginComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthguardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
