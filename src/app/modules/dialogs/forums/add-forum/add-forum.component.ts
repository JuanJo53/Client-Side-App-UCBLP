import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.scss']
})
export class AddForumComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  
  startDate1 = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
