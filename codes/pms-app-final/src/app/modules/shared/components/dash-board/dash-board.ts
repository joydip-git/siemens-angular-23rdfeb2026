import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-dash-board',
  imports: [RouterLink],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard implements OnInit {

  private tokenSvc = inject(TokenService)
  private router = inject(Router)
  isLoggedIn = signal(false)

  ngOnInit(): void {
    this.tokenSvc.tokenObservable.subscribe({
      next: (token) => {
        if (token !== null)
          this.isLoggedIn.set(true)
        else
          this.isLoggedIn.set(false)
      }
    })
  }

  logout() {
    this.tokenSvc.removeToken()
    this.router.navigate(['/login'])
  }
}
