import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";

import { LoginComponent } from "src/app/modules/login/login.component";
import { ChoosingClassroomComponent } from "src/app/modules/choosing-classroom/choosing-classroom.component";

import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";

import { PostsComponent } from "src/app/modules/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
//Revisar este import! Me saltaba error en la linea 35! Revisar tambien los demas imports en otras librerias!
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    LoginComponent,
    PostsComponent,
    ChoosingClassroomComponent,
    ThemesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatToolbarModule,
    SharedModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
  ],
})
export class DefaultModule {}
