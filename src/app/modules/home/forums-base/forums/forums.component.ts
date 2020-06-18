import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AddForumComponent } from "../../../dialogs/forums/add-forum/add-forum.component";
import { EditForumComponent } from "../../../dialogs/forums/edit-forum/edit-forum.component";
import { DeleteCardComponent } from "../../../dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "../../../../services/dialogs/delete-item.service";
import { Forum } from "../../../../models/Teacher/Forums/Forum";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
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
    fechaInicio: "30/5/2020",
    fechaFinal: "30/6/2020",
    hora: "20:00",
    id: 1,
  },
  {
    nombreForo: "Complains Practice 1",
    fechaInicio: "30/5/2020",
    fechaFinal: "30/6/2020",
    hora: "20:00",
    id: 1,
  },
  {
    nombreForo: "Complains Assessment 1",
    fechaInicio: "30/5/2020",
    fechaFinal: "30/6/2020",
    hora: "20:00",
    id: 1,
  },
];
@Component({
  selector: "app-forums",
  templateUrl: "./forums.component.html",
  styleUrls: ["./forums.component.scss"],
})
export class ForumsComponent implements OnInit {
  item: string = "forum";
  displayedColumns: string[] = [
    "nombreForo",
    "fechaInicio",
    "fechaFinal",
    "hora",
    "id",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private data: DeleteItemService
  ) {}
  agregarCardsForums(data) {
    for (let i in data) {
      let newForum = new Forum();
      let fecini = Date.parse(data[i].fecha_creacion);
      let datini = new Date();
      datini.setTime(fecini);
      let fecfin = Date.parse(data[i].fecha_creacion);
      let datfin = new Date();
      datini.setTime(fecini);
      console.log(datfin);
    }
  }
  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        console.log(data);
        this.agregarCardsForums(data.forums.body);
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.data.changeMessage(this.item);
  }
  verForo() {
    //[where i wanna go] ,{where i am}
    this.router.navigate([1], { relativeTo: this.route });
  }
  crearForo() {
    const dialogRef = this.dialog.open(AddForumComponent, { width: "500px" });
  }
  editarForo() {
    const dialogRef = this.dialog.open(EditForumComponent, { width: "500px" });
  }
  eliminarForo() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "forum",
      },
    });
  }
}
