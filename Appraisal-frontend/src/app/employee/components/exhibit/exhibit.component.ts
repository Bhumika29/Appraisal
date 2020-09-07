import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.scss']
})
export class ExhibitComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [3, 3.5, 4, 5.33, 5.6, 6, 6.2], label: 'Lakh per annum'},
  ];

  ngOnInit() {
  }

}
