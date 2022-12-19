import { Component, OnInit } from '@angular/core';

import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Student', 'Marks'],
      ['A', 80],
      ['B', 90],
      ['C', 88],
      ['D',100],
      ['E',200]
    ],
    
    options: { 'title': 'Student Marks' },
  };
  lineChart1: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Student', 'grade'],
      ['A', 89],
      ['B', 190],
      ['C', 188],
      ['D',100],
      ['E',200]
    ],
    
    options: { 'title': 'Student Marks' },
  };
}
