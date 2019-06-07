import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InvHw } from '../../../app/models/invhw';
import { GLOBAL } from '../../../app/services/global';
import { UserService } from '../../../app/services/user1.service';
import { InvHwService } from '../../../app/services/invhw.service';

import { fadeLateral } from '../../../admin/animation/animation';

@Component({
  selector: 'admin-inventario-hw',
  templateUrl: './inventario-hw.component.html',
  providers: [UserService, InvHwService],
  animations: [fadeLateral]
})
export class InventarioHwComponent implements OnInit {
  	public title: string;
  	public title1: string;
  	public invhw: InvHw;
  	public status: string;
  	public token: string;
  	public url: string;
  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		private _invHwService: InvHwService
  		) {
  	this.title = 'Inventario Hardware';
  	this.title1 = 'The Antivenom Company™';
  	this.invhw = new InvHw('','','','','','','',2019,1,true,'',0);
  	this.token = this._userService.getToken();
  	this.url = GLOBAL.url;
   }

  ngOnInit() {
  	console.log('Funciona InventarioHw.component');
  }

  onSumbit(invHwForm) {
    this. _invHwService.addInvhw(this.token, this.invhw).subscribe(
      response => {
        if(response.invhw && response.invhw._id){
            //A this.user le doy el valor de response.user
            //this.user = response.user;
            console.log(response.invhw);
            this.status = "success";
            //this.invhw = new InvHw('','','','','','','',2019,1,true,'',0);
            invHwForm.reset();
        }else{
            this.status = "error";
        }
        },
      error => {
        console.log(<any>error);
      }  
    );
  }
}