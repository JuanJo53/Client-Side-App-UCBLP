import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DefaultModule } from "./layouts/default/default.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthInterceptor } from "./_help/auth-interceptor.service";
import { BuildingPageComponent } from './modules/aux-pages/building-page/building-page.component';





@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, BuildingPageComponent,],
=======
  declarations: [AppComponent],
>>>>>>> c4dec162eb4445af8b603c8f665d6209f772dff5
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
