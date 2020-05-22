import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"],
})
export class AddStudentComponent implements OnInit {
  emailAcademico: string = "";

  constructor() {}

  ngOnInit(): void {}
  aceptar() {
    console.log(this.emailAcademico);
  }
}
