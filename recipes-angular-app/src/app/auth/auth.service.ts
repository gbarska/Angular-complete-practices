import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

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
user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient){}

    signUp(email: string, password: string, ){
    return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-TH7MYdVj8oyLH-N7xvjQpMjHimNFXYw',
        {
         email: email, 
         password: password, 
         returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
        tap(resData =>{
            this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
        })
        );
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-TH7MYdVj8oyLH-N7xvjQpMjHimNFXYw',
        {
         email: email, 
         password: password, 
         returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
        tap(resData =>{
            this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
        }));
    }



    private handleError(error: HttpErrorResponse){
        let errorMsg  = 'An unknown error ocurred!';
        if ( !error.error || !error.error.error  ){
            return throwError(errorMsg);
        }
        switch( error.error.error.message){
           case 'EMAIL_EXISTS':
             errorMsg = 'This email already exists';
           break;
           case 'EMAIL_NOT_FOUND':
            errorMsg = 'This email does not exists';
           break;
           case 'INVALID_PASSWORD':
                errorMsg = 'This password is not correct';
           break;
        }
        return throwError(errorMsg);
    }
    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
}