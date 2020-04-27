import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    DefaultComponent ,
    //DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class DefaultModule { }
