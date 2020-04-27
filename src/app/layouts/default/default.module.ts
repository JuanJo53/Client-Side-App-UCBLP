import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
=======
import {MatButtonModule} from '@angular/material/button';


>>>>>>> d363fc9d911b342ae8bd524148392267f109f6bf

@NgModule({
  declarations: [
    DefaultComponent ,
    //DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatFormFieldModule,
=======
    MatButtonModule
>>>>>>> d363fc9d911b342ae8bd524148392267f109f6bf
  ]
})
export class DefaultModule { }
