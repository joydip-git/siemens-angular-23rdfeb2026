import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FilterNamePipe } from './pipes/filter-name-pipe';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, LowerCasePipe, FilterNamePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly names = signal(['anil', 'sunil', 'mahesh']);
  protected filterText = signal('')
}
