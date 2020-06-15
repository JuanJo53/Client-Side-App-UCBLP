import { Component, OnInit } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { ResourceContent } from "../../../models/resources/resourceContent";
import { ResourceSection } from "../../../models/resources/resourceSection";


import { AddSectionComponent} from "../../dialogs/resources/add-section/add-section.component";
import { AddDocumentComponent} from "../../dialogs/resources/add-document/add-document.component";
import {EditSectionComponent} from "../../dialogs/resources/edit-section/edit-section.component";
import {EditDocumentComponent} from "../../dialogs/resources/edit-document/edit-document.component";
import { MatDialog } from '@angular/material/dialog';
import { DeleteCardComponent } from "../../dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";

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
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  //funciones
  agregarSeccion() {
    console.log("clicked");
    const dialogRef = this.dialog.open(AddSectionComponent, { width: "500px" });
  }
  agregarDocumento() {
    const dialogRef = this.dialog.open(AddDocumentComponent, { width: "500px" });
  }
  editarDocumento() {
    const dialogRef = this.dialog.open(EditDocumentComponent, { width: "500px" });
  }
  editarSeccion() {
    const dialogRef = this.dialog.open(EditSectionComponent, { width: "500px" });
  }
  eliminarSeccion() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "Section",
      },
    });
  }
  eliminarDocumento() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "File",
      },
    });
  }
  
  
}
