import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  ViewEncapsulation,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
import { ChartOptions, ChartDataSets } from "chart.js";
import { ActivatedRoute } from "@angular/router";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { PracticeDashboard } from "src/app/models/DashBoard/PracticeDashboard";
import { SharedService } from "src/app/shared/shared.service";
import { NgxGlideComponent } from "ngx-glide";
import { TooltipPosition } from "@angular/material/tooltip";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  @ViewChild(NgxGlideComponent, { static: false }) ngxGlide: NgxGlideComponent;

  play(): void {
    this.ngxGlide.play();
    this.ngxGlide.arrowLeftLabel = "<";
  }
  positionOptions: TooltipPosition[] = [
    "after",
    "before",
    "above",
    "below",
    "left",
    "right",
  ];
  tooltipText: String = "porcentaje";
  position = new FormControl(this.positionOptions[2]);
  practicas: PracticeDashboard[] = [];
  // link = "Dashboard";
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

  barChartOptions: ChartOptions = {
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

  barChartLabels: Label[] = ["T1", "T2", "T3", "T4", "T5", "T6"];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];
  link: string = "Dashboard";

  barChartData: ChartDataSets[] = [
    {
      data: [10, 80, 81, 60, 60, 80],
      label: "Tests",
      backgroundColor: "#084c61",
      hoverBackgroundColor: "#83a5af",
      borderColor: "#fff",
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private tokenServ: TokenStorageService,
    private datalink: SharedService
  ) {}
  cargarDatosPractica() {
    this.practicas = [];
    this.route.data.subscribe({
      next: (data) => {
        if (data.practices.status == 200) {
          for (let practica of data.practices.body) {
            let newPrac = new PracticeDashboard();
            newPrac.idPractica = practica.id_practica;
            newPrac.nombrePractica = practica.nombre_practica;
            var a = practica.aprobados as number;
            var r = practica.reprobados as number;
            var n = practica.sin_dar as number;
            newPrac.datos = [[a, r, n]];
            this.practicas.push(newPrac);
          }
        }
      },
      error: (err) => {
        if (err.status == 401) {
          this.tokenServ.signOut();
        }
        console.log(err);
      },
    });
  }
  ngOnInit() {
    this.datalink.changeMessage(this.link);
    this.cargarDatosPractica();
  }

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
