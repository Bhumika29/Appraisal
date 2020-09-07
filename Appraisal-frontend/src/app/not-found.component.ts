import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: '<h2>  404 - Page not found </h2> <p *ngIf="path">You might want to go to the <a [routerLink]="path">"{{ path }}" page</a></p>'
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
