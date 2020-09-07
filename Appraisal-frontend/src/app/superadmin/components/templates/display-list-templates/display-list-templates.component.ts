import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core';
@Component({
  selector: 'app-display-list-templates',
  templateUrl: './display-list-templates.component.html',
  styleUrls: ['./display-list-templates.component.scss']
})
export class DisplayListTemplatesComponent implements OnInit {

  searchText = '';
  sortTemplateField = '';
  p = 1;
  toggleValue = false;
  toggleClass: any;
  templateLength: number;
  showEntries = 3;
  entries = 3;
  addEntries = [];
  templateData: [];
  templateFields = [
    {
      header: 'Template Name ',
      field: 'template_name'
    },
    {
      header: 'Allowed Profile ',
      field: 'allowed_profile'
    },
    {
      header: 'Allowed Experience (years) ',
      field: 'allowed_experience'
    },
    {
      header: 'Allowed Exhibit (lpa) ',
      field: 'allowed_exhibit',
    },
    {
      header: 'Update ',
      field: ''
    },
    {
      header: 'Delete ',
      field: ''
    }];

  constructor(private api: ApiService) {
    this.toggleClass = {
      'fa sort-icon': true,
      'fa-angle-down': true,
      'fa-angle-up': false
    };
  }

  ngOnInit() {
    this.api.getTemplateList().subscribe(data => {
      this.templateData = data.result;
      console.log('Template Data', this.templateData);
      this.templateLength = this.templateData.length;

      if (this.showEntries > this.templateLength) {
        this.addEntries.push(1);
      } else {
        while (this.showEntries < this.templateLength) {
          this.addEntries.push(this.showEntries);
          this.showEntries = this.showEntries + 3;
        }
        this.addEntries.push(this.templateLength);
      }
    });

  }
  sortByField(field) {
    this.sortTemplateField = field;
    this.toggleValue = !this.toggleValue;
    this.toggleClass = {
      'fa sort-icon': true,
      'fa-angle-down': !this.toggleValue,
      'fa-angle-up': this.toggleValue
    };

  }

}
