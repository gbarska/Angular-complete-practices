import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    activationsCounter= 0;
    inactivationsCounter = 0;

  constructor(private counterService: CounterService){}

    onActivated = new EventEmitter<number>();
    onInactivated = new EventEmitter<number>();

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.inactivationsCounter++;
        this.onInactivated.emit(this.inactivationsCounter);
        this.counterService.onInactivation();
      }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.activationsCounter++;
        this.onActivated.emit(this.activationsCounter);
        this.counterService.onActivation();
      }
}