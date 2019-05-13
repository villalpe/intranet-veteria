import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogp',
  templateUrl: './blogp.component.html',
})
export class BlogpComponent implements OnInit {

  public title: string;
  public title1: string;
  public identity;
  public url: string;
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
