import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user1.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  public title: string;
  public title1: string;
  public identity;
  public url: string;
  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  	) {
  	this.title = 'Intranet The Antivenom Company™';
  	this.title1 = 'Veteria Labs';
  	this.url = GLOBAL.url;
   }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}