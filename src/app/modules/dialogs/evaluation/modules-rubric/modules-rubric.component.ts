import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-rubric',
  templateUrl: './modules-rubric.component.html',
  styleUrls: ['./modules-rubric.component.scss']
})
export class ModulesRubricComponent implements OnInit {
  disableTextbox =  true;
  constructor() { }
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  ngOnInit(): void {
  }

}
