import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
  //  let id = +this.route.snapshot.params['id'];
  //  this.server = this.serversService.getServer(id);
  //  console.log(this.server);
  //  this.route.params
  //    .subscribe((params: Params) => {
  //      id = +params['id'];
  //     this.server = this.serversService.getServer(id);
  //    });

  this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }
  onEdit(){
    this.router.navigate(['/servers',this.server.id,'edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
