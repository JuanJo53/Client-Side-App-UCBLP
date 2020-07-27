import { Injectable } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: SidebarComponent;


  public setLoading(loading: SidebarComponent) {
      this.loading = loading;
  }

  public cambiarEstadoLoading() {
    
  }

}
