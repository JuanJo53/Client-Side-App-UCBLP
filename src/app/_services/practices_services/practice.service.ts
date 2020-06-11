import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import apiKey from "../apiKey";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
@Injectable({
  providedIn: "root",
})
export class PracticeService {
  constructor(private http: HttpClient) {}
  // addRadioButtonQuestion(addT: RadioButtonCompleteCard): Observable<any> {
  //   return this.http.post(apiKey.api + "/teacher/modules/themes", addT, {
  //     observe: "response",
  //   });
  // }
  // getCardQuestionContent(idTema): Observable<any> {
  //   return this.http.get(
  //     apiKey.api + "/teacher/modules/themes" + idTema,
  //     { observe: "response" }
  //   );
  // }
}
