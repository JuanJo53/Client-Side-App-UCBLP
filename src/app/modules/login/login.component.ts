import { Component, OnInit, ViewChild } from "@angular/core";
import { TeacherLogin } from "src/app/models/Login/TeacherLogin";
import { from } from "rxjs";
import { AuthService } from "src/app/_services/general_services/auth.service";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ErrorDialogComponent } from "../dialogs/simple-dialogs/error-dialog/error-dialog.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { LoadingComponent } from "src/app/shared/components/loading/loading.component";
import { LoadingService } from "src/app/_services/loading.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @ViewChild("loading") public loading: LoadingComponent;
  //-----variables
  textoLogo: string = "UCB English";
  imagenLogo: string = "assets/logo.png";
  usuario = "teacher";
  loginTeacher: TeacherLogin = {
    idDocente: 0,
    contraseniaDocente: "",
    correoDocente: "",
  };
  //-----#variables
  //-----#funciones
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private servLoading: LoadingService //private data: ErrorDialogComponent
  ) {}
  ngOnInit() {
    console.log(this.tokenStorage.getToken());
    if (
      this.tokenStorage.getToken() === "undefined" ||
      this.tokenStorage.getToken() == null
    ) {
    } else {
      this.router.navigate(["/classroom"]);
      return false;
    }
  }
  //-----funciones
  LoginDocente() {
    this.servLoading.setLoading(this.loading);
    this.servLoading.activar();
    this.authService.loginDocente(this.loginTeacher).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.token);
        if (
          this.tokenStorage.getToken() === "undefined" ||
          this.tokenStorage.getToken() == null
        ) {
          this.servLoading.desactivar();
          this.simpleAlert();
          console.log("No se pudo iniciar sesión");
        } else {
          const nav = this.router.navigate(["/classroom"]);
          nav.then((data) => {
            this.servLoading.desactivar();
          });
        }
      },
      error: (error) => console.log(error),
    });
  }
  simpleAlert() {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: "400px",
    });
  }
}
