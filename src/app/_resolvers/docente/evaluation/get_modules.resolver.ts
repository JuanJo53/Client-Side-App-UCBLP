import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { EvaluationService } from 'src/app/_services/teacher_services/evaluation.service';

@Injectable({
  providedIn: 'root'
})
export class GetModulesResolver{

  constructor(private modulesRes:EvaluationService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
      
    const idCurso=route.parent.params['idCurso'];
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.modulesRes.getModules(idCurso);
    }
  }
}
