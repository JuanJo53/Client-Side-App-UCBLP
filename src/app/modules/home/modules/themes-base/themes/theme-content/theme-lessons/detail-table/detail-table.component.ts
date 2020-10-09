import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { NotaPractica } from "src/app/models/Teacher/Modules/NotaPractica";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";

@Component({
  selector: "app-detail-table",
  templateUrl: "./detail-table.component.html",
  styleUrls: ["./detail-table.component.scss"],
})
export class DetailTableComponent implements OnInit {
  ELEMENT_DATA: NotaPractica[] = [];
  displayedColumns: string[] = [
    "posicion",
    "p_nombre",
    "m_nombre",
    "nombre",
    "promedioFinal",
    "id",
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenServ: TokenStorageService
  ) {}
  cargarNotas() {
    this.route.data.subscribe({
      next: (data) => {
        if (data.scores.status == 200) {
          for (let i in data.scores.body) {
            var nota = data.scores.body[i];
            let newNota = new NotaPractica();
            newNota.idNotaPractica = nota.id_nota_practica;
            newNota.apMaterno = nota.ap_materno_alumno;
            newNota.apPaterno = nota.ap_paterno_alumno;
            newNota.nombre = nota.nombre_alumno;
            newNota.nota = nota.nota_practica;
            newNota.practicaDada=nota.practica_dada;
            newNota.posicion = Number(i) + 1;
            this.ELEMENT_DATA.push(newNota);
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
  ngOnInit(): void {
    this.cargarNotas();
  }
  verDetalles(id:number) {
    this.router.navigate(["individual",id], { relativeTo: this.route });
  }
}
