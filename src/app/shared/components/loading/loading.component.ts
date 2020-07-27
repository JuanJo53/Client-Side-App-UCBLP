import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  cargando:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  activar(){
    this.cargando=true;
  }
  desactivar(){
    this.cargando=false;

  }

}
