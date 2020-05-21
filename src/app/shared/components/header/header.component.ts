import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../shared.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})

export class HeaderComponent implements OnInit {
  userDocente:Teacher={
    apellidoDocente:"",
    nombreDocente:"",
    correoDocente:"",
    primaLetra:""
  }
  mylogo: string = "assets/logo.png";
  materia = "English 1";
  message: string;
  tituloNavbar: string;
  constructor(private data: SharedService,private usService:ActivatedRoute,private router:Router,private tokenServ:TokenStorageService) {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.usService.data.subscribe({
      next:data=>{
        this.userDocente.correoDocente = data.profile.correo_docente;
          this.userDocente.nombreDocente =
            data.profile.nombre_docente;
          this.userDocente.apellidoDocente=
          data.profile.ap_pat_docente +
          " " +
          data.profile.ap_mat_docente;
          this.userDocente.primaLetra = data.profile.nombre_docente.substring(
            0,
            1
          );
      },
      error:err=>{
        this.router.navigate(['/']);
      }
    })
  }
  signout(): void {
    this.tokenServ.signOut();
    this.router.navigate(["/"]);
  }
}
