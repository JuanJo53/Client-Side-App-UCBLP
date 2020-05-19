import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/_services/general_services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDocenteResolver {

  constructor(private authService:AuthService,private router:Router,private tokenService:TokenStorageService) { }
  resolve(){
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){

    }
    else{      
      this.router.navigate(['/classroom']);
    }
  }
}
