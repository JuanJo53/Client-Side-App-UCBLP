import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosing-classroom',
  templateUrl: './choosing-classroom.component.html',
  styleUrls: ['./choosing-classroom.component.scss']
})
export class ChoosingClassroomComponent implements OnInit {
  mylogo:string = "assets/logo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
