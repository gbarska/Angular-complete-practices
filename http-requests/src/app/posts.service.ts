import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PostsService{
    error = new Subject<string>();

    constructor(private http: HttpClient){

    }

    create(title: string, content: string){
        const postData: Post = {title: title, content: content};

        this.http
        .post<{ name: string }>(
          'https://angular-guide-aeeab.firebaseio.com/posts.json',
          postData,
          {
              observe: 'response'
          }
        )
        .subscribe(responseData => {
          console.log(responseData);
        },error => {
            this.error.next(error.message);
        });
    }

    fetch(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        searchParams = searchParams.append('custom','key');

       return this.http.get(
        'https://angular-guide-aeeab.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header': 'Hello'}),
            params: searchParams
            //its also possible to change the response type from json to text for example
            // responseType: 'text'
        })
        .pipe(
          map( data => {
          const postArray = [];
          for(const item in data){
            if(data.hasOwnProperty(item)){
              postArray.push({...data[item], id: item});
            }
    
          }
          return postArray;
        }),catchError(errorRes => {
            //send to analytics or log for example
            return throwError(errorRes);
        })
        );
    }

    delete(){
        return this.http.delete('https://angular-guide-aeeab.firebaseio.com/posts.json',
        {
            observe: 'events'
        })
        .pipe(tap(event => {
            if(event.type === HttpEventType.Response)
            console.log(event.body);
            if(event.type === HttpEventType.Sent)
            console.log("REQUEST SENT");
        }));
    }
}