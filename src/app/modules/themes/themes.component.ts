import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  tema = "Theme 1";
  descripcion = "Present";
  constructor() { }

  ngOnInit(): void {
  }

}
