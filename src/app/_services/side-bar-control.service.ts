import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class SideBarControlService {
  private sideBar: SidebarComponent;


  public setSidenav(sideBar: SidebarComponent) {
      this.sideBar = sideBar;
  }

  public modificarmodulos(modulo,index) {
    return this.sideBar.modificarModulo(modulo,index);
}
  public eliminarmodulos(index) {
    return this.sideBar.eliminarModulo(index);
  }
  public modulos(data) {
    console.log("serafd");
    return this.sideBar.agregarModulos2(data);
  }

}
