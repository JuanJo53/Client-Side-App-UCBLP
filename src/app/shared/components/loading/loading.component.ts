import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  cargando:boolean=false;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  activar(){
    this.spinner.show();
    this.cargando=true;
  }
  desactivar(){
    this.spinner.hide();
    this.cargando=false;

  }

}
