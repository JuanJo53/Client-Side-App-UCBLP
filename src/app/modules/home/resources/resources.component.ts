import { Component, OnInit } from "@angular/core";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import { MatTableDataSource } from "@angular/material/table";
import { ResourceContent } from "../../../models/resources/resourceContent";
import { ResourceSection } from "../../../models/resources/resourceSection";


@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  ListaSecciones: ResourceSection[] = [
    {
      nombreSeccion: "seccion 1",
      resourceContent: [
        {
          tipoDocumento: "insert_drive_file",
          nombreDocumento: "Verb to be Doc",
          urlDoucmento: "www.whatever.com",
        },
        {
          tipoDocumento: "video_library",
          nombreDocumento: "Verb to be Doc",
          urlDoucmento: "www.whatever.com",
        },
      ],
    },
    {
      nombreSeccion: "seccion 2",
      resourceContent: [
        {
          tipoDocumento: "fiber_manual_record",
          nombreDocumento: "Verb to be Doc",
          urlDoucmento: "www.whatever.com",
        },
        {
          tipoDocumento: "insert_drive_file",
          nombreDocumento: "Verb to be Doc",
          urlDoucmento: "www.whatever.com",
        },
        {
          tipoDocumento: "insert_drive_file",
          nombreDocumento: "Verb to be Doc",
          urlDoucmento: "www.whatever.com",
        },
      ],
    },
    {
      nombreSeccion: "seccion 3",
      resourceContent: [
        {
          tipoDocumento: "fiber_manual_record",
          nombreDocumento: "Verb to be Doc",
          urlDoucmento: "www.whatever.com",
        },
      ],
    },
  ];

  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ["tipoDocumento", "nombreDocumento", "id"];
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
