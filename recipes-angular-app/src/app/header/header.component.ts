import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  subs = new Subscription();
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private  authService: AuthService){}
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  ngOnInit(): void {
  this.subs = this.authService.user.subscribe( user => {
   this.isAuthenticated = !!user;
   console.log(!user);
   console.log(!!user); 
  });
  }
  onLogout(){
    this.authService.logout();
  }
  onSaveData(){
    this.dataStorageService.save();
  }
  onFetchData(){
    this.dataStorageService.fetch().subscribe();
  }
  
  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }
}
