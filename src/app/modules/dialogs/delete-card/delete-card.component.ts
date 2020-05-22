import { Component, OnInit } from "@angular/core";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
@Component({
  selector: "app-delete-card",
  templateUrl: "./delete-card.component.html",
  styleUrls: ["./delete-card.component.scss"],
})
export class DeleteCardComponent implements OnInit {
  item: string = "card";
  constructor(private data: DeleteItemService) {}
  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (nombreItem) => (this.item = nombreItem)
    );
  }
}
