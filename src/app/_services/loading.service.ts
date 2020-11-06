import { Injectable } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: LoadingComponent;


  public setLoading(loading: LoadingComponent) {
      this.loading = loading;
  }

  public activar() {
    this.loading.activar();
  }
  public desactivar(){
    this.loading.desactivar();
  }

}
