import { Component, OnInit } from "@angular/core";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import { MatTableDataSource } from "@angular/material/table";
export interface ListaDeForos {
  tipoDocumento: string;
  nombreDocumento: string;
  id: string;
}
const ELEMENT_DATA: ListaDeForos[] = [
  {
    tipoDocumento: "Complains Test 1",
    nombreDocumento: "Verb to be Doc",
    id: "1",
  },
  {
    tipoDocumento: "Complains Test 1",
    nombreDocumento: "Verb to be Doc",
    id: "1",
  },
  {
    tipoDocumento: "Complains Test 1",
    nombreDocumento: "Verb to be Doc",
    id: "1",
  },
];
@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = [
    "tipoDocumento",
    "nombreDocumento",
    "id",
  ];
  constructor() {}

  ngOnInit(): void {}
  //funciones
  agregarSeccion() {
    console.log("clicked");
  }
  verForo() {
    //[where i wanna go] ,{where i am}
    //this.router.navigate([1], { relativeTo: this.route });
  }
  crearForo() {
   // const dialogRef = this.dialog.open(AddForumComponent, { width: "500px" });
  }
  editarForo() {
    //const dialogRef = this.dialog.open(EditForumComponent, { width: "500px" });
  }
  eliminarForo() {
    // const dialogRef = this.dialog.open(DeleteCardComponent, {
    //   width: "400px",
    //   data: {
    //     tipo: "forum",
    //   },
    // });
  }
}
