import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {

  @Input() toggle: boolean;
 toggleClass: any;

  constructor() {
    this.toggleClass = {
      // tslint:disable-next-line: object-literal-key-quotes
      'menubar' : true,
       // tslint:disable-next-line: object-literal-key-quotes
      'nopadding' : true,
       // tslint:disable-next-line: object-literal-key-quotes
      'activeToggle' : true
    };
  }

  ngOnChanges() {
    if ( this.toggle) {
      this.toggleClass.activeToggle = false;
    } else {
      this.toggleClass.activeToggle = true;
    }
    console.log('Toggle value', this.toggle, this.toggleClass.menubar, this.toggleClass.activeToggle);
  }

}
