import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
<<<<<<< HEAD
=======
import {MatInputModule} from '@angular/material/input';

>>>>>>> fdfd095784c385761df99db92cde6f7128465bbe

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
<<<<<<< HEAD
    MatFormFieldModule
=======
    MatFormFieldModule,
    MatInputModule
>>>>>>> fdfd095784c385761df99db92cde6f7128465bbe
  ]
})
export class DefaultModule {}
