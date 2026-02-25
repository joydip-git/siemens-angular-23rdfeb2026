import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  submit() {
    console.log(this.loginForm.value);
  }
}
