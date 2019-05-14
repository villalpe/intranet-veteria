import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../app/services/user1.service';
import { GLOBAL } from '../../../app/services/global';

@Component({
  selector: 'admin-sidemenu',
  templateUrl: './sidemenu.component.html'
})
export class SidemenuComponent {
  public identity;
  public url: string;	
  public title: string;
  public title1: string;

  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  	){
  	this.title = 'Panel Usuario';
  	this.title1 = 'Veteria Labs';
  	this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
   }
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }
}