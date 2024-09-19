import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class LoginModule { }
