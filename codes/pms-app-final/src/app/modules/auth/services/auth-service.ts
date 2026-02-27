import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../../../config/constants';
import { ApiResponse } from '../../products/models/api-response';

@Injectable()
export class AuthService {
    //using inject()
    private http = inject(HttpClient)
    // constructor() {
    //     this.http = inject(HttpClient)
    // }

    //using constructor injection
    //constructor(private http: HttpClient) { }

    loginUser(user: User) {
        return this.http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
    }

    registerUser(user: User) {
        return this.http.post<ApiResponse<User>>(`${AUTH_API_URL}/register`, user)
    }
}
