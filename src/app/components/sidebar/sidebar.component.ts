import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public title: string;
  public title1: string;
  
  constructor(
  	//private _route: ActivatedRoute,
    //private _router: Router,
    //private _userService: UserService
  	) {
  	this.title = 'Intranet Veteria Labs';
  	this.title1 = 'Veteria Labs';
  	//this.url = GLOBAL.url;
   }

  ngOnInit(){
    //this.identity = this._userService.getIdentity();
  }

}
