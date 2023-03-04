import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  barChartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  lineChartType: ChartType = 'line';
  barChartLegend = true;
  getColor(value: number): any {
    if (value !== undefined) {
      if (value <= 4) {
        return 'rgba(100, 60, 255, 0.2)';
      } else if (value >= 10) {
        return 'rgba(155, 60, 255, 0.2)';
      } else {
        return 'rgba(255, 60, 255, 0.2)';
      }
    }
  }
  contador = 0;
  contador1 = 0;
  barChartData = [
    {
      data: [1, 2, 3, 4, 10, 20, 30, 100],
      label: 'Series A',
      fill: true,
      backgroundColor: 'rgba(255, 60, 255, 0.2)',
      borderColor: '#ff3cff',
      pointBackgroundColor: '#ff3cff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff3cff',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      fill: true,
      backgroundColor: 'rgba(255, 60, 255, 0.2)',
      borderColor: '#ff3cff',
      pointBackgroundColor: '#ff3cff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff3cff',
    },
  ];
}
