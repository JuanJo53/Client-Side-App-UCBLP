import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const TOKEN_DOCENTE="token_doc";
const TOKEN_USER="token_user";
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router:Router) { }
  signOut(){
    window.sessionStorage.clear();
    this.router.navigate(["/"]);
  }
  public saveToken(token:string){
    window.sessionStorage.removeItem(TOKEN_DOCENTE);
    window.sessionStorage.setItem(TOKEN_DOCENTE,token);
  }
  public getToken():string{
    return window.sessionStorage.getItem(TOKEN_DOCENTE);
  }
  public saveUser(user){
    window.sessionStorage.removeItem(TOKEN_USER);
    window.sessionStorage.setItem(TOKEN_USER,user);
  }
  public getUser():string{
    return window.sessionStorage.getItem(TOKEN_USER);
  }
}
