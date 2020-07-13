import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-building-page',
  templateUrl: './building-page.component.html',
  styleUrls: ['./building-page.component.scss']
})
export class BuildingPageComponent implements OnInit {
  imageUrl: string = "/assets/building.gif";
  constructor(private router: Router, private location: Location) {}
  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }

  ngOnInit(): void {
  }

}
