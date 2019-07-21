import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFakeService } from '../auth-fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status ="Logged Out";

  constructor(private router: Router, private auth: AuthFakeService) { }

  ngOnInit() {
    this.updateStatus();
  }

  onLoadServers(id:number){
    this.router.navigate(['/servers',id,'edit'], {queryParams:{allowEdit: 1},fragment:'loading'});
  }
  onLogin(){
    this.auth.logIn();
    this.updateStatus();
  }
  onLogout(){
    this.auth.logOut();
    this.updateStatus();
  }

  updateStatus(){
    this.auth.isAuthenticated()
    .then(
      (authenticated: boolean) => {
        if (authenticated) {
        this.status = 'Logged in';
        }
        else {
        this.status = 'Logged out';
        }
      }
  );
  }
}
