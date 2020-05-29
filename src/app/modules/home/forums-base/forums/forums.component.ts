import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-forums",
  templateUrl: "./forums.component.html",
  styleUrls: ["./forums.component.scss"],
})
export class ForumsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  verForo() {
    //[where i wanna go] ,{where i am}

    this.router.navigate([1], { relativeTo: this.route });
  }
}
