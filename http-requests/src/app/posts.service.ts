import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators';
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
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        },error => {
            this.error.next(error.message);
        });
    }

    fetch(){
       return this.http.get< { [ key: string ]: Post } >('https://angular-guide-aeeab.firebaseio.com/posts.json')
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
        return this.http.delete('https://angular-guide-aeeab.firebaseio.com/posts.json');
    }
}