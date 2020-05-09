import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tema = "Theme 1";
  descripcion = "Present";

  constructor() { }

  ngOnInit() {
  }

}
