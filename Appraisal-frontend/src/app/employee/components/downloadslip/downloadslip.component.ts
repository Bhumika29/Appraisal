import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-downloadslip',
  templateUrl: './downloadslip.component.html',
  styleUrls: ['./downloadslip.component.scss']
})
export class DownloadslipComponent implements OnInit {

  employeeDetailsL = ['Name Of Employee: XYZ',
  'Designation: Rolename',
  'Salary for the month: Feb,2020'
  ];

  employeeDetailsR = [
  'Employee No: A123',
  'Bank A/C No: 000000000000000',
  'Bank Name : Axis Bank'
  ];

  incomeData = [
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
        value: 25200
    },
    {
      name: ' CORPORATE ATTIRE ALLOWANCE',
        value: 0
    },
    {
       name: ' VARIABLE COMPONENT',
        value: 0
    },
    {
       name: ' LOYALTY BONUS ',
        value: 0
    }
];

deductionData = [
  {
    name: 'Tax Deducted at Source',
    value: 0
  },
  {
    name: 'Professional Tax',
    value: 0
  },
  {
    name: 'Provident Fund',
    value: 0
  },
  {
    name: 'Advance Adjustment',
    value: 0
  },
  {
    name: 'Other Deductions',
    value: 0
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

    doc.autoTable({ html: '#head' , styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75, didParseCell(table) {
      {
       // console.log(table.section);
        console.log(table.column);
        const tdElement = table.cell.raw;
        if (tdElement.classList.contains('bold')) {
          table.cell.styles.fontStyle = 'bold';
          table.cell.styles.halign = 'center';
      }

      }
    }
  });

    doc.autoTable({ html: '#employeeDetail1' , startY: 40, margin: {right: 110}, styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75});

    doc.autoTable({ html: '#employeeDetail2' ,  startY : 40, margin: {left: 100}, styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75 });

    doc.autoTable({ html: '#incomeData' , startY: 65, margin: {right: 110}, styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75});

    doc.autoTable({ html: '#deductionData' ,  startY : 65, margin: {left: 100}, styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75 });

    doc.autoTable({ html: '#total' ,  startY : 152, styles: {lineWidth: 0.01}, theme: 'plain',
    tableLineWidth: 0.75 });

    doc.save('payslip.pdf');
  }
}



