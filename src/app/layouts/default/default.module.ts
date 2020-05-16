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
//import { FlexLayoutModule } from "@angular/flex-layout";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ThemesComponent } from 'src/app/modules/themes/themes.component';
<<<<<<< HEAD
=======
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
>>>>>>> 4d9e9f10f9f3fe8ce2e3fe2dfab0d1ac4a7b13f4

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
    //FlexLayoutModule,
    MatToolbarModule,
    SharedModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,

    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
 
  ],
})
export class DefaultModule {}
