import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { QualificationService } from 'src/app/_services/teacher_services/qualification.service';

@Injectable({
  providedIn: 'root'
})
export class GetQualificationResolver{

  constructor(private servQua:QualificationService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idCurso=route.parent.parent.parent.params['idCurso'];
    console.log(idCurso); 
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.servQua.getQualifications(idCurso);
      
    }
  }
}

