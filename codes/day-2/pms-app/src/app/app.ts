import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './modules/auth/auth-module';

@Component({
  selector: 'app-root',
  imports: [AuthModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
