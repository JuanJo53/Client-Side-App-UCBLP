import { Injectable } from '@angular/core';
import { UserService } from '../../_services/general_services/user.service';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileDocenteResolver{

  constructor(private userService:UserService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(){
    
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.userService.getProfileDocente();
    }
  }
}
