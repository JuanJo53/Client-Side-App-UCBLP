import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { ViewResponseComponent } from "../../../../dialogs/forums/view-response/view-response.component";
import { DeleteCardComponent } from "../../../../dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "../../../../../services/dialogs/delete-item.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
export interface ListaDeRespuestasForos {
  nombreEstudiante: string;
  fecha: string;
  hora: string;
  id: number;
}

const ELEMENT_DATA: ListaDeRespuestasForos[] = [
  {
    nombreEstudiante: "Ernesto Vilela Montero",
    fecha: "30/5/2020",
    hora: "20:00",
    id: 1,
  },
  {
    nombreEstudiante: "Sergio Ivan Prudencio",
    fecha: "30/5/2020",
    hora: "20:00",
    id: 1,
  },
  {
    nombreEstudiante: "Ariel Colque Herrera",
    fecha: "30/5/2020",
    hora: "20:00",
    id: 1,
  },
];

@Component({
  selector: "app-forum-content",
  templateUrl: "./forum-content.component.html",
  styleUrls: ["./forum-content.component.scss"],
})
export class ForumContentComponent implements OnInit {
  displayedColumns: string[] = ["nombreEstudiante", "fecha", "hora", "id"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  item: string = "forum response";

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private data: DeleteItemService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.data.changeMessage(this.item);
    this.dataSource.paginator = this.paginator;
  }
  verRespuesta() {
    const dialogRef = this.dialog.open(ViewResponseComponent, { width: "800px" });
  }
  

  eliminarRespuestaForo() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "forum response",
      },
    });
  }
}
