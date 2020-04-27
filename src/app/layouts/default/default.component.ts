import { Component, OnInit } from '@angular/core';
//import {MediaObserver , MediaChange} from '@angular/flex-layout';
//import {Subscription} from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  mylogo:string = "assets/logo.png";
  constructor() { }
  ngOnInit() {
  }
}
