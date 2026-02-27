import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../shared/services/token-service';
import { ActivatedRoute, Router } from '@angular/router';
import { passwordStrength } from '../../validators/passowrdstrength';

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
  private builderSvc = inject(FormBuilder)
  private authSvc = inject(AuthService)
  private tokenSvc = inject(TokenService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  private sub?: Subscription;

  constructor() {
    this.loginForm = this.builderSvc.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, passwordStrength]]
    })
  }

  get userName() {
    return this.loginForm.get('username')
  }
  get passWord() {
    return this.loginForm.get('password')
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
            this.tokenSvc.saveToken(token)
          } else {
            window.alert(resp.message)
          }
        },
        error: () => { },
        complete: () => {
          //redirect to the products by default if login was the originally requested url or to the originally requested url
          const snapshot = this.route.snapshot;
          if (snapshot.queryParams['returnUrl']) {
            this.router.navigate([snapshot.queryParams['returnUrl']])
          } else {
            this.router.navigate(['/products'])
          }
        }
      })
    }
  }
}
