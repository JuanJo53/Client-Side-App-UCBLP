import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-custom-module',
  templateUrl: './edit-custom-module.component.html',
  styleUrls: ['./edit-custom-module.component.scss']
})
export class EditCustomModuleComponent implements OnInit {

 
  disableTextbox =  true;
  constructor() { }
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  ngOnInit(): void {
  }

}
