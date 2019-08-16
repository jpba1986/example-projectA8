import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    idToken	    : string
    email	    : string
    refreshToken: string
    expiresIn	: string
    localId     : string
}

@Injectable({ providedIn:'root'})
export class AuthService {
  constructor(private http: HttpClient){}

  signUp( email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdKzuWEZ4fL_9HUlnoAMj7fLX6GyCrC1c',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
    }



}