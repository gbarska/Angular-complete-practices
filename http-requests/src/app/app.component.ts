import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-guide-aeeab.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http.get('https://angular-guide-aeeab.firebaseio.com/posts.json')
    .pipe(map( data => {
      const postArray = [];
      for(const item in data){
        if(data.hasOwnProperty(item)){
          postArray.push({...data[item], id: item});
        }

      }
      return postArray;
    }))
      .subscribe( posts => {
        console.log(posts);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
