import { NgModule, Optional, SkipSelf } from '@angular/core';
import {  ApiService } from './services/api/api.service';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('102021636026-0c3a2aqb0k23b2d3kksuthkokkvovdqk.apps.googleusercontent.com')
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  imports: [
    BrowserModule, SocialLoginModule
  ],
  providers: [
    ApiService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  declarations: []
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule ) {
  }
}
