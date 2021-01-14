import { AfterContentInit, Component, OnChanges, OnInit } from "@angular/core";
import { SharedService } from "../../shared.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Teacher } from "src/app/models/Teacher/Teacher";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { CardClassroom } from "src/app/models/Teacher/ClassRoom/CardClassroom";
import { LoadingService } from "src/app/_services/loading.service";
import { ScheduleComponent } from "src/app/modules/dialogs/schedule/schedule/schedule.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, AfterContentInit {
  userDocente: Teacher = {
    apellidoDocente: "",
    nombreDocente: "",
    correoDocente: "",
    primaLetra: "",
  };
  materias: CardClassroom[] = [];
  sidebarOpen: boolean = true;
  mylogo: string = "assets/logo.png";
  materia = "";
  simbCurso = "";
  message: string;
  tituloNavbar: string;
  constructor(
    public dialog: MatDialog,
    private data: SharedService,
    private usService: ActivatedRoute,
    private router: Router,
    private tokenServ: TokenStorageService,
    private servLoading: LoadingService
  ) {}
  ngOnInit() {
    var idCurso;
    this.sidebarOpen = true;
    this.usService.params.subscribe((data) => {
      idCurso = data["idCurso"];
    });
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.usService.data.subscribe({
      next: (data) => {
        this.materias = [];
        for (let materia of data.classroom) {
          let newCurso = new CardClassroom();
          newCurso.curso = materia.nombre_curso;
          newCurso.id_curso = materia.id_curso;
          this.materias.push(newCurso);
          if (materia.id_curso == idCurso) {
            this.materia = materia.nombre_curso;
            var ini = this.materia.substring(0, 1);
            var fin = this.materia.substring(
              this.materia.length - 1,
              this.materia.length
            );
            this.simbCurso = ini + fin;
          }
        }
        this.userDocente.correoDocente = data.profile.correo_docente;
        this.userDocente.nombreDocente = data.profile.nombre_docente;
        this.userDocente.apellidoDocente =
          data.profile.ap_pat_docente + " " + data.profile.ap_mat_docente;
        this.userDocente.primaLetra = data.profile.nombre_docente.substring(
          0,
          1
        );
      },
      error: (err) => {
        this.router.navigate(["/"]);
      },
    });
  }
  ngAfterContentInit() {
    const themeId = this.usService.snapshot.params.idTema;
  }
  horario() {
    const dialogRef = this.dialog.open(ScheduleComponent, { width: "400px" });
  }
  signout(): void {
    this.servLoading.activar();
    this.tokenServ.signOut();
  }
  home() {
    this.servLoading.activar();
    this.router.navigate(["classroom"]);
  }
  navigator(materia: CardClassroom) {
    this.servLoading.activar();
    const nav = this.router.navigate([
      "/teacher/" + materia.id_curso + "/dashboard",
    ]);
    nav.then((dat) => {
      this.servLoading.desactivar();
    });
  }
}
