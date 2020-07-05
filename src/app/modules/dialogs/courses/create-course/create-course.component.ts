import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"],
})
export class CreateCourseComponent implements OnInit {
  nombreClassroom: string;
  valueQuantity: number;
  cantidadEstudiantes: number[]=[1,2,3];

  constructor() {}

  ngOnInit(): void {}
}
