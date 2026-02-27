import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    Login,
    Registration
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: []
})
export class AuthModule { }
