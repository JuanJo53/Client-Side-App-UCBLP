import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Router, ActivatedRoute } from "@angular/router";
import * as XLSX from "xlsx";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { TitleCasePipe } from "@angular/common";
import { ListaEstudiante } from "src/app/models/Teacher/MyClass/ListaEstudiante";
import { SharedService } from "src/app/shared/shared.service";
import { ExportExcelService } from "src/app/_services/export-excel.service";
import { TooltipPosition } from "@angular/material/tooltip";
import { FormControl } from "@angular/forms";
import { PracticesService } from 'src/app/_services/teacher_services/practices.service';
export interface ListaDeNotas {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  asistencia: number;
  actividades: number;
  practicas: number;
  examenTemas: number;
  assessment: number;
  promedioFinal: number;
  id: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA2: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class QualificationComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource2 = ELEMENT_DATA2;
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

  link: string = "My class / Qualification";
  columns: string[] = [];
  columnsPor: string[] = [];

  ELEMENT_DATA: ListaEstudiante[] = [];
  displayedColumns2: string[] = ["posicion", "p_nombre", "m_nombre", "nombre"];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("TABLE", { static: false }) TABLE: ElementRef;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private data: SharedService,
    private exc: ExportExcelService,
    private practiceS:PracticesService
  ) {}
  cargarDatosBody(data) {
    console.log(data);
  }

  ExportTOExcel() {
    let element = document.getElementById("TABLE");
    this.exc.export(element, "General Notes", this.displayedColumns.length);
  }

  cargarCabezera(cabe) {
    console.log(cabe);
    for (let cabezera of cabe) {
      this.displayedColumns.push(cabezera.nombre_modulo);
    }
    this.displayedColumns.push("Actions");
  }
  cargarDatos(data) {
    console.log(data);
    if (data.length > 0) {
      if (data[0].modulos) {
        for (let dat of data[0].modulos) {
          this.columns.push(dat.nombre_modulo);
          this.columnsPor.push(String(dat.rubrica));
        }
      }
      this.displayedColumns = this.columns.map((col) => col);
      this.displayedColumns.splice(0, 0, "nombre");
      this.displayedColumns.splice(0, 0, "m_nombre");
      this.displayedColumns.splice(0, 0, "p_nombre");
      this.displayedColumns.splice(0, 0, "posicion");
      console.log(this.columns);
      console.log(this.displayedColumns);

      this.displayedColumns.push("promedioFinal");
      this.displayedColumns.push("id_alumno_curso");
    }
    for (let i in data) {
      let newAsis = new ListaEstudiante();
      newAsis.nombre = data[i].nombre_alumno;
      newAsis.m_nombre = data[i].ap_materno_alumno;
      newAsis.p_nombre = data[i].ap_paterno_alumno;
      newAsis.id_alumno_curso = data[i].id_curso_alumno;
      var a = [];
      var prom = 0;
      if (data[i].modulos) {
        for (let nota of data[i].modulos) {
          a.push(
            Number((nota.rubrica / 100) * nota.nota_modulo).toPrecision(3)
          );
          prom += (nota.rubrica / 100) * nota.nota_modulo;
        }
      }
      newAsis.notas = a;
      newAsis.promedio = Number(prom.toPrecision(3));
      newAsis.posicion = Number(i) + 1;
      this.ELEMENT_DATA.push(newAsis);
    }
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    for (let index in headerList) {
        row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let index in headerList) {
           let head = headerList[index];

            if(Number(index)>0){
              line += ',' + array[i][head];
            }
            else{
              line +=  array[i][head];

            }
        }
        str += line + '\r\n';
    }
    return str;
}
downloadFile(data, filename='data') {
  let csvData = this.ConvertToCSV(data, ['approved','carrera', 'edad_alumno', 'genero_alumno','weak_skill']);
  console.log(csvData)
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
  }
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink);
}
  DataMining(){
    this.practiceS.getDataSet().subscribe({
      next:(data)=>{
        if(data.status==200){
            this.downloadFile(data.body);        }
      },
      error:(err)=>{

      }
    })
  }
  ngOnInit(): void {
    this.data.changeMessage(this.link);
    this.route.data.subscribe({
      next: (data) => {
        this.cargarDatos(data.qualifications.body);
      },
      error: (err) => {},
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  perfil(alumno) {
    console.log(["profile", alumno.id_alumno_curso], {
      relativeTo: this.route.parent.url,
    });
    this.router.navigate(["profile", alumno.id_alumno_curso], {
      relativeTo: this.route.parent.parent,
    });
  }
}
