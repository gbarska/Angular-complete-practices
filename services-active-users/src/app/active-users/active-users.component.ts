import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  // @Input() users: string[];
  users: string[];
  
  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }
  
constructor(private usersService: UsersService){}

  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.setToInactive(id);
  }
}
