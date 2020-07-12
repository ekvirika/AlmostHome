import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './authentication.routing';
import { AuthLayoutComponent } from '../../layout/auth-layout/auth-layout.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
