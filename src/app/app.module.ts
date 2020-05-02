import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DefaultModule } from "./layouts/default/default.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChoosingClassroomComponent } from './modules/choosing-classroom/choosing-classroom.component';

@NgModule({
  declarations: [AppComponent, ChoosingClassroomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
