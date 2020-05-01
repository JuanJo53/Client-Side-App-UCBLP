import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";

import { LoginComponent } from "src/app/modules/login/login.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    LoginComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatToolbarModule,
    SharedModule,
  ],
})
export class DefaultModule {}
