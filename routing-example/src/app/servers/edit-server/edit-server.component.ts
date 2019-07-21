import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    //just like params fetch the params when component is initialized
    //if it changes inside the component, we must  subscribe
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    let id = +this.route.snapshot.params['id'];

   this.server = this.serversService.getServer(id);

   this.route.params
     .subscribe((params: Params) => {
       id = +params['id'];
       this.server = this.serversService.getServer(id);
     });

    this.route.queryParams
      .subscribe((queryParams: Params)=>{
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      })
    this.serverStatus = this.server.status;
    this.serverName = this.server.name;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
