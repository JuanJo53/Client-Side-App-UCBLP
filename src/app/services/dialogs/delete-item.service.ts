import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DeleteItemService {
  private messageSource = new BehaviorSubject<string>("default msg");
  currentMessage = this.messageSource.asObservable();

  constructor() {}
  changeMessage(nombreItem: string) {
    this.messageSource.next(nombreItem);
  }
}
