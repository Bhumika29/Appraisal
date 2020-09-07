import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-due-appraisal',
  templateUrl: './due-appraisal.component.html',
  styleUrls: ['./due-appraisal.component.scss']
})
export class DueAppraisalComponent implements OnInit {

  filterOptions = ['Name', 'Role', 'Experience', 'Package', 'Increment', 'Select'];
  constructor() { }

  ngOnInit() {
  }

}
