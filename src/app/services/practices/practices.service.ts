import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
@Injectable({
  providedIn: "root",
})
export class PracticesService {
  aux = {
    id: 9,
    puntuacion: -10,
    preguntaCard: "default message ",
    radioButtonContent: [
      { opcionRespuesta: "default message " },
      { opcionRespuesta: "default message " },
      { opcionRespuesta: "default message " },
      { opcionRespuesta: "default message " },
    ],
  };
  private messageSource = new BehaviorSubject<RadioButtonCompleteCard>(
    this.aux
  );
  currentMessage = this.messageSource.asObservable();
  constructor() {}
  passObject(objRadioButton: RadioButtonCompleteCard) {
    this.messageSource.next(objRadioButton);
  }
}
