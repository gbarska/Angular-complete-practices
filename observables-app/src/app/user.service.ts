import { Injectable, EventEmitter } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    //old  approach uses eventemitter
    // activatedEmitter = new EventEmitter<boolean>();

    //recommended approach
    activatedEmitter = new Subject<boolean>();
}
