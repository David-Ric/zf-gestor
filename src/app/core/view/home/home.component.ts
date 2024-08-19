import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexResponsive
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis?: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  labels?: string[];
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public barChartOptions: ChartOptions = {
    series: [
      {
        name: 'Sem Pedido',
        data: [500, 1000, 750, 1200, 900, 800, 950, 1100, 1300, 700, 600, 1000]
      },
      {
        name: 'NF Emitida',
        data: [300, 700, 500, 900, 600, 400, 800, 1000, 1200, 500, 400, 800]
      },
      {
        name: 'Com Agenda',
        data: [200, 600, 400, 800, 500, 300, 700, 900, 1100, 400, 300, 700]
      },
      {
        name: 'Com Pedido',
        data: [400, 800, 600, 1000, 700, 500, 900, 1100, 1300, 600, 500, 900]
      },
      {
        name: 'Não Executado',
        data: [100, 500, 300, 700, 400, 200, 600, 800, 1000, 300, 200, 600]
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Contas a Receber com Status'
    },
    xaxis: {
      categories: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%'
      }
    }
  };

  public pieChartOptions: ChartOptions = {
    series: [57.01262, 17.04021, 0, 0, 52.45217],
    chart: {
      type: 'pie',
      width: 350,
      height: 350
    },
    title: {
      text: 'Medições'
    },
    labels: ['Despesas', 'Impostos', 'Caução', 'Salários', 'Total Líquido'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 250,
          height: 250
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  public areaChartOptions: ChartOptions = {
    series: [
      {
        name: 'Medições',
        data: [57.01262, 17.04021, 0, 0, 52.45217]
      }
    ],
    chart: {
      type: 'area',
      height: 350
    },
    title: {
      text: 'Medições'
    },
    xaxis: {
      categories: ['Despesas', 'Impostos', 'Caução', 'Salários', 'Total Líquido']
    }
  };

  constructor() {}

  ngOnInit(): void {
    console.log('HomeComponent inicializado');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destruído');
  }
}
