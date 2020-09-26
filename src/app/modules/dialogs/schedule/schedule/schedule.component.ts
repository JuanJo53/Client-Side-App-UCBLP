import { Component, OnInit } from '@angular/core';
import { ScheduleContent} from "src/app/models/schedule/scheduleContent";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    ScheduleContent: ScheduleContent[] = [
    {
     dia: "Monday",
     hora:"7:30-9:00"
    },
    {
      dia: "Friday",
      hora:"10:00-11:30"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
