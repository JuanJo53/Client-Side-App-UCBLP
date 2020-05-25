import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsGeneralResolver{

  constructor(private studentService:MyClassService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idCurso=route.parent.parent.params['idCurso'];
    console.log(idCurso); 
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.studentService.getStudentsGeneral(idCurso);
      /*return [{
        nombre: "Sergio",
        p_nombre: "Prudencio",
        m_nombre: "Flores",
        promedio: 90,
        id: 1,
      },
      {
        nombre: "Ariel",
        p_nombre: "Colque",
        m_nombre: "Herrera",
        promedio: 90,
        id: 2,
      },
      {
        nombre: "Sergio",
        p_nombre: "Prudencio",
        m_nombre: "Flores",
        promedio: 90,
        id: 3,
      },
      {
        nombre: "Sergio",
        p_nombre: "Prudencio",
        m_nombre: "Flores",
        promedio: 90,
        id: 4,
      },
      {
        nombre: "Ariel",
        p_nombre: "Colque",
        m_nombre: "Herrera",
        promedio: 90,
        id: 5,
      },
      {
        nombre: "Sergio",
        p_nombre: "Prudencio",
        m_nombre: "Flores",
        promedio: 90,
        id: 6,
      },
      {
        nombre: "Ariel",
        p_nombre: "Colque",
        m_nombre: "Herrera",
        promedio: 90,
        id: 7,
      },
      {
        nombre: "Sergio",
        p_nombre: "Prudencio",
        m_nombre: "Flores",
        promedio: 90,
        id: 8,
      },
      {
        nombre: "Ariel",
        p_nombre: "Colque",
        m_nombre: "Herrera",
        promedio: 90,
        id: 9,
      },
      {
        nombre: "Sergio",
        p_nombre: "Prudencio",
        m_nombre: "Flores",
        promedio: 90,
        id: 10,
      },
      {
        nombre: "Ariel",
        p_nombre: "Colque",
        m_nombre: "Herrera",
        promedio: 90,
        id: 11,
      },];*/
    }
  }
}



