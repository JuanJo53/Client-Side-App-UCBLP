import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DeleteItemService {
  private messageSource = new BehaviorSubject<string>("default msg");
  currentMessage = this.messageSource.asObservable();

  constructor() {}
  changeMessage(mensajeDialog: string) {
    this.messageSource.next(mensajeDialog);
  }
}
