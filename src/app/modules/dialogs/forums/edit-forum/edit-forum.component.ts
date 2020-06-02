import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-forum',
  templateUrl: './edit-forum.component.html',
  styleUrls: ['./edit-forum.component.scss']
})
export class EditForumComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  startDate1 = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
