import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatDialogModule, MatDividerModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [UserComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [
  ]
})
export class UserModule { }
