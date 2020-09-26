import { Component, OnInit } from "@angular/core";
//import { SimpleCard } from "src/app/models/simpleCard";

import { Router, ActivatedRoute } from "@angular/router";
import { SimpleCard } from 'src/app/models/SimpleCard';
@Component({
  selector: "app-assessments",
  templateUrl: "./assessments.component.html",
  styleUrls: ["./assessments.component.scss"],
})
export class AssessmentsComponent implements OnInit {
  practices: SimpleCard[] = [
    {
      id: 1,
      titulo: "Practice 1",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Practice 2",
      color: "#D77A61",
    },
    {
      id: 3,
      titulo: "Practice 3",
      color: "#D77A61",
    },
    {
      id: 4,
      titulo: "Practice 4",
      color: "#D77A61",
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  verlistar() {
    this.router.navigate(["detail"], { relativeTo: this.route });
  }
  configuraciones() {}
  eliminar() {}
}
