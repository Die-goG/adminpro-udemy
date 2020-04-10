import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

   // tslint:disable-next-line: no-input-rename
  @Input('chartLabels') doughnutChartLabels: string[] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('chartData') doughnutChartData: number[] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('chartType') doughnutChartType: string = '';

/*   // tslint:disable-next-line: no-input-rename
  @Input('chartLabels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // tslint:disable-next-line: no-input-rename
  @Input('chartData') doughnutChartData: number[] = [350, 450, 100];
  // tslint:disable-next-line: no-input-rename
  @Input('chartType')public doughnutChartType: string = 'doughnut'; */

  constructor() { }

  ngOnInit(): void {
  }

}
