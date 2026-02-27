import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenService {
  private store = new BehaviorSubject<string | null>(null)
  tokenObservable = this.store.asObservable()

  saveToken(token: string) {
    this.store.next(token)
  }
  removeToken() {
    this.store.next(null)
  }
}
