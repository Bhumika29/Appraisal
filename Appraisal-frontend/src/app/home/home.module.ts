import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule, HomeRoutingModule
  ],
  providers: [
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
