import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  loadedPosts : Post[] = [];
  isFetching = false;
  error = null;
  subs: Subscription;
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  this.subs =  this.postsService.error.subscribe(error => {
      this.error = error;
      this.isFetching = false;
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.create(postData.title,postData.content); 
    this.onFetchPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching =true;
    this.postsService.fetch()      
        .subscribe( posts => {
          this.loadedPosts = posts;
          this.isFetching = false;
      },error => {
        this.isFetching = false;
        this.error = error.message;
      });

  }

  onClearPosts() {
    // Send Http request
   this.postsService.delete()
    .subscribe(() => {
      this.loadedPosts = [];  
    });
  }

  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }

  onHandleError(){
    this.error = null;
  }
}
