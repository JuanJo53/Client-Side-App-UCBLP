import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface ListaDeForos {
  nombreForo: string;
  fechaInicio: string;
  fechaFinal: string;
  hora: string;
  id: number;
}

const ELEMENT_DATA: ListaDeForos[] = [
  {
    nombreForo: "Complains Test 1",
    fechaInicio: '30/5/2020',
    fechaFinal: '30/6/2020',
    hora: '20:00',
    id: 1,
  },
  {
    nombreForo: "Complains Practice 1",
    fechaInicio: '30/5/2020',
    fechaFinal: '30/6/2020',
    hora: '20:00',
    id: 1,
  },
  {
    nombreForo: "Complains Assessment 1",
    fechaInicio: '30/5/2020',
    fechaFinal: '30/6/2020',
    hora: '20:00',
    id: 1,
  },
];
@Component({
  selector: "app-forums",
  templateUrl: "./forums.component.html",
  styleUrls: ["./forums.component.scss"],
})


export class ForumsComponent implements OnInit {

  displayedColumns: string[] = ["nombreForo",
    "fechaInicio",
    "fechaFinal",
    "hora",
    "id"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  verForo() {
    //[where i wanna go] ,{where i am}
    this.router.navigate([1], { relativeTo: this.route });
  }
}
