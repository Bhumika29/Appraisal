import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { style } from '@angular/animations';
@Component({
  selector: 'app-download-exhibit',
  templateUrl: './download-exhibit.component.html',
  styleUrls: ['./download-exhibit.component.scss']
})
export class DownloadExhibitComponent implements OnInit {
   tableData = [{
    heading: '1.Monthly Components',
    fields: [
      {
        name: ' BASIC',
        value: 5000
    },
    {
       name: ' DEARNESS ALLOWANCE (DA) ',
        value: 0
    },
    {
      name: ' HOUSE RENT ALLOWANCE (HRA)',
        value: 1500
    },
    {
      name: ' CONVEYANCE ALLOWANCE',
        value: 1000
    },
    {
      name: ' MEDICAL ALLOWANCE',
        value: 500
    },
    {
      name: ' TELEPHONE ALLOWANCE',
        value: 500
    },
    {
      name: ' SPECIAL ALLOWANCE',
        value: 10000
    },
    {
      name: ' CORPORATE ATTIRE ALLOWANCE',
        value: 0
    },
    {
      name:  ' Monthly GROSS',
        value: 23000
    }
    ]
  },
  {
    heading: ' 2.Annual Components',
    fields: [
      {
        name: ' BONUS/EX-GRATIA - 20% of (Basic + DA) (pay out monthly)',
        value: 1500
    },
    {
       name: ' SPECIAL ACCOMPLISHMENT BONUS (pay out monthly)',
        value: 0
    }
  ]
  },
  {
    heading: ' 3. RETIRAL BENEFITS',
    fields: [
      {
        name: ' PROVIDENT FUND - 12% of [(Basic + DA) or Rs.15000.00, whichever is less] (monthly)',
        value: 500
    },
    {
       name: ' GRATUITY - 4.81% of (Basic + DA) (monthly)',
        value: 200
    },
    {
      name: ' Fixed GROSS (monthly)',
       value: 25200
   }
  ]
  },
  {
    heading: 'VARIABLE COMPONENT',
    fields: [
      {
        name: ' Total value of variable component for 12 months',
        value: 0
    },
    {
       name: ' Variable component (pay out yearly) (indicative per month at a payout of 100%)',
        value: 0
    }
  ]
  },
  {
    heading: 'LOYALTY BONUS',
    fields: [
      {
        name: ' Special Loyalty bonus (pay out (100%) every 12 months, subject to continued employment in this period)',
        value: 0
    },
    {
       name: ' Loyalty bonus (indicative per month)',
        value: 0
    },
    {
      name: ' GROSS (indicative per annum. Inclusive of variable component @ 100% payout + loyalty bonus)',
       value: 302400
   }
  ]
  }
];
 // @ViewChild('table', {static: false}) private table: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  downloadPDF() {
    const doc = new jsPDF();
   /* const table = document.getElementById('table');
    doc.fromHTML(table, 0, 0);*/
    doc.autoTable({ html: '#table' , styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75, didParseCell(table) {
      {
       // console.log(table.section);
        console.log(table.column);
        const tdElement = table.cell.raw;
        if (tdElement.classList.contains('bold')) {
          table.cell.styles.fontStyle = 'bold';
          table.cell.styles.halign = 'center';
      }
        if (table.section === 'head') {
         table.cell.styles.halign = 'center';
        }

      }
    }
  });
    doc.save('exhibit.pdf');
  }
}
