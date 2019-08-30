import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private usersService: UsersService){}
  
   activeUsers = [];
   inactiveUsers = [];
  activationsCounter = 0;
  inactivationsCounter =0;

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;

    this.usersService.onActivated.subscribe(
      (counter: number) =>{this.activationsCounter= counter}
      );

      this.usersService.onInactivated.subscribe(
        (counter: number) =>{this.inactivationsCounter = counter}
        );
  }

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }


}
