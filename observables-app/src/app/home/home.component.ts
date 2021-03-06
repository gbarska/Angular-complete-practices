import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, fromEventPattern } from 'rxjs';
import { map, filter } from 'rxjs/operators';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  constructor() { }

  private subs: Subscription;

  ngOnInit() {
  //handling pre-defined observables: interval
  //  this.subs = interval(1000).subscribe( count => {
  //     console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(handler => {
        observer.next(count);
        if (count ==2 ){
          observer.complete();
        }
        if (count > 3){
          observer.error(new Error ("exceeds 3"));
        }
        count++;
      },1000);
    });

    

   this.subs = customIntervalObservable.pipe(filter(data => {return data > 0}),map((data: number) => {
    return 'Round: ' + (data + 1); 
    })).subscribe( data => {
      console.log(data);
    }, error =>{
      console.log(error);
    },() => {console.log("oservable completed!")})
  }

}
