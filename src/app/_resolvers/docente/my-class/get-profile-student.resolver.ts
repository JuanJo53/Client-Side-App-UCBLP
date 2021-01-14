import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';

@Injectable({
  providedIn: 'root'
})
export class GetProfileStudentResolver{

  constructor(private studentService:MyClassService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idCurso=route.parent.parent.params['idCurso'];
    const idAlumnoCurso=route.params['idAlumnoCurso'];
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.studentService.getProfile(idCurso,idAlumnoCurso)
      
    }
  }
}



