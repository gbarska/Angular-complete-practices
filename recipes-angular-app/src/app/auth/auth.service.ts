import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private http: HttpClient){}

    signUp(email: string, password: string, ){
    return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-TH7MYdVj8oyLH-N7xvjQpMjHimNFXYw',
        {
         email: email, 
         password: password, 
         returnSecureToken: true
        }).pipe(catchError(error => {
            let errorMsg  = 'An unknown error ocurred!';
            if ( !error.error || !error.error.error  ){
                return throwError(errorMsg);
            }
            switch( error.error.error.message){
                case 'EMAIL_EXISTS':
                 errorMsg = 'This email already exists';
            }
            return throwError(errorMsg);
        }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-TH7MYdVj8oyLH-N7xvjQpMjHimNFXYw',
        {
         email: email, 
         password: password, 
         returnSecureToken: true
        });
    }
}