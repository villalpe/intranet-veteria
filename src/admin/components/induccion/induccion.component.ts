import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../app/services/global';
import { UserService } from '../../../app/services/user1.service';

import { fadeLateral } from '../../../admin/animation/animation';

@Component({
  selector: 'admin-induccion',
  templateUrl: './induccion.component.html',
  providers: [UserService],
  animations: [fadeLateral]
})
export class InduccionComponent implements OnInit {
	public title: string;
	public title1: string;
  	public status: string;
  	public token: string;
  	public url: string;
  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		) {
  	this.title = 'Induccion a la Compañia';
  	this.title1 = 'Veteria Labs';
  	this.token = this._userService.getToken();
  	this.url = GLOBAL.url;
   }

  ngOnInit() {
  	//console.log('Funciona RH.component');
  }

}