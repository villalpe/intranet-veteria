import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../app/services/global';
import { UserService } from '../../../app/services/user1.service';

import { fadeLateral } from '../../../admin/animation/animation';

@Component({
  selector: 'admin-noticias',
  templateUrl: './noticias.component.html',
  providers: [UserService],
  animations: [fadeLateral]
})
export class NoticiasComponent implements OnInit {
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
  	this.title = 'Noticias';
  	this.title1 = 'Veteria Labs';
  	this.token = this._userService.getToken();
  	this.url = GLOBAL.url;
   }

  ngOnInit() {
  	//console.log('Funciona RH.component');
  }

  /*onSumbit(pollForm) {
    this._pollService.addPoll(this.token, this.poll).subscribe(
      response => {
        if(response.poll && response.poll._id){
            //A this.user le doy el valor de response.user
            //this.user = response.user; 
            this.status = "success";
            this.poll = new Poll('','','','','','');
            pollForm.reset();
        }else{
            this.status = "error";
        }
        },
      error => {
        console.log(<any>error);
      }  
    );
  }*/
}
