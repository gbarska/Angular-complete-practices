import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl:  './auth.component.html'
})

export class AuthComponent{
isLogin = true;
isLoading = false;
error: string = null;
constructor(private authService: AuthService, private router: Router){}

onSwitchMode(){
this.isLogin = !this.isLogin;
}

onSubmit(form: NgForm){
this.isLoading = true;

if(!form.valid){
   return;
}

const email = form.value.email;
const password = form.value.password;

let authObs: Observable<AuthResponseData>;

if (this.isLogin){
  authObs = this.authService.login(email,password);
}else{

  authObs = this.authService.signup(email,password);
}
authObs.
    subscribe(response => {
                console.log(response);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
                },
              error => {
                    console.log(error);
                    this.error = error;
                    this.isLoading = false;
            });

form.reset();    
}

}