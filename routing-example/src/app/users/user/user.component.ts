import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user ={
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    //when the route for the current component is called inside the component
    //it is necessary to subscribe to the route object
    //in order to catch the changes and refresh data displayed
    this.route.params
            .subscribe(
              (params: Params) =>{
                this.user.id = params['id'];
                this.user.name = params['name'];
              }
            );

  }

}
