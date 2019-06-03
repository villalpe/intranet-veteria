import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user1.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
	public title: string;
	public title1: string;
	public user: User;
  	public status: string;
  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService
  	) {
  	this.title = 'Intranet Veteria Labs';
  	this.title1 = 'Veteria Labs';
  	this.user = new User('','','',0,'','','','','');
   }

  ngOnInit() {
  }

  onSumbit(registerForm) {
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
            //A this.user le doy el valor de response.user
            //this.user = response.user; 
            this.status = "success";
  			this.user = new User('','','',0,'','','','','');
            registerForm.reset();
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
