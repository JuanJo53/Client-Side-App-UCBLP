import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
// import { MultiDataSet, Label } from 'ng2-charts';
import { ChartOptions, ChartDataSets } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})

// export class DashboardComponent implements OnInit {
//     link="Dashboard";

//   constructor() { }

//   ngOnInit() {

//   }

// }
export class DashboardComponent implements OnInit {
  link = "Dashboard";
  public doughnutChartType: ChartType = "doughnut";

  public doughnutChartLabels: Label[] = ["Yes", "No"];
  public doughnutChartData: MultiDataSet = [[85, 15]];

  public doughnutChartColors = [
    {
      backgroundColor: ["#084c61", "#ca5a5d"],
    },
  ];

  public doughnutChartLabelsPractices: Label[] = [
    "Approved",
    "Failed",
    "No taken",
  ];
  public doughnutChartDataPractices: MultiDataSet = [[70, 10, 20]];

  public doughnutChartColorsPractices = [
    {
      backgroundColor: ["#084c61", "#ca5a5d", "#8f8f8f"],
    },
  ];

  public doughnutChartDataTests: MultiDataSet = [[70, 10, 20]];

  public doughnutChartDataAssessment: MultiDataSet = [[70, 15, 15]];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100, // minimum will be 0, unless there is a lower value.
            // OR //
            beginAtZero: true, // minimum value will be 0.
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  public barChartLabels: Label[] = ["T1", "T2", "T3", "T4", "T5", "T6"];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    {
      data: [10, 80, 81, 60, 60, 80],
      label: "Tests",
      backgroundColor: "#084c61",
      hoverBackgroundColor: "#83a5af",
      borderColor: "#fff",
    },
  ];
  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
