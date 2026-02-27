import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnDestroy {
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl('')
  // })

  loginForm: FormGroup;
  private builder = inject(FormBuilder)
  private authSvc = inject(AuthService)
  private sub?: Subscription;

  constructor() {
    this.loginForm = this.builder.group({
      username: [''],
      password: ['']
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  submit() {
    if (window.confirm('Login?')) {
      const user = <User>this.loginForm.value
      this.sub = this.authSvc.loginUser(user).subscribe({
        next: (resp) => {
          const token = resp.data
          if (token !== null) {
            //save the token
          } else {
            window.alert(resp.message)
          }
        },
        error: () => { },
        complete: () => {
          //redirect to the products by default if login was the originally requested url or to the originally requested url
         }
      })
    }
  }
}
