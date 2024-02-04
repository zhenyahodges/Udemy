import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test';
  // username = '';
  serverCreated = false;
  servers = ['Test', 'Test2'];
  // displayDetails = false;
  // count = 0;
  // clickCoutnsArr = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is: ' + this.serverName;
  }

  // onDisplayDetails() {
  //   this.displayDetails = !this.displayDetails;
  //   this.count++;
  //   // this.clickCoutnsArr.push(this.count);
  //   this.clickCoutnsArr.push(new Date());
  // }

  onUpdateServerName(event: any) {
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }
}
