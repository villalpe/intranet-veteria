import { Component, OnInit, DoCheck } from '@angular/core';
declare let $: any;

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Poll } from '../../../app/models/poll';
import { User } from '../../../app/models/user';
import { GLOBAL } from '../../../app/services/global';
import { PollService } from '../../../app/services/poll.service';
import { UserService } from '../../../app/services/user1.service';

import { fadeLateral } from '../../../admin/animation/animation';

@Component({
  selector: 'admin-sidemenu',
  templateUrl: './sidemenu.component.html',
  providers: [PollService, UserService],
  animations: [fadeLateral]
})
export class SidemenuComponent implements OnInit {
   public title: string;
   public url: string;
   public status: string;
   public polls: Poll[];
   public user: User[];
   public token;
   public busqueda;

   constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _pollService: PollService,
      private _userService: UserService
    ){
      this.title = 'Encuestas Recursos Humanos';
      this.url = GLOBAL.url;
      this.token = this._userService.getToken();
      //this.animal = new Animal('','','',2017,'','');
   }

   ngOnInit(){
     this.getPolls(); 
   }

    getPolls(){
      console.log('componente.list-polls funciona correctamente');
      this._pollService.getPolls().subscribe(
        response => {
          if(!response.polls){

          }else{
            this.polls = response.polls;
            console.log(response.polls);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
   }

   deletePoll(id){
    $('#myModal-'+id).modal('hide');
    console.log("Id desde el component.listPoll: "+id);
    this._pollService.deletePoll(this.token, id).subscribe(
      response => {
        console.log(response.poll);
        if(!response.poll){
          alert('Error en el servidor');
        }else{
          this.getPolls();
        }
      },
      error => {
          alert('Error en el servidor');
      }
    );
   }
 
}