import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
//import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { MatExpansionModule } from "@angular/material/expansion";
import { CardClassroomComponent } from './components/cards/card-classroom/card-classroom.component';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
  declarations: [HeaderComponent, SidebarComponent, CardClassroomComponent, LoadingComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  exports: [HeaderComponent, SidebarComponent,LoadingComponent],
})
export class SharedModule {}
