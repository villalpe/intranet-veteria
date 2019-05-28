import { Component, OnInit, DoCheck } from '@angular/core';
declare let $: any;

import { Router, ActivatedRoute, Params } from '@angular/router';
import { UploadFile } from '../../../app/models/uploadfile';
import { User } from '../../../app/models/user';
import { GLOBAL } from '../../../app/services/global';
import { UloadfService } from '../../../app/services/uloadf.service';
import { UserService } from '../../../app/services/user1.service';
import {saveAs} from 'file-saver';
import * as jsPDF from 'jspdf';

import { fadeLateral } from '../../../admin/animation/animation';

@Component({
  selector: 'admin-listfiles',
  templateUrl: './listfiles.component.html',
  providers: [UloadfService, UserService],
  animations: [fadeLateral]
})
export class ListFilesComponent implements OnInit {
   public title: string;
   public url: string;
   public status: string;
   public ufiles: UploadFile[];
   public ufile: [];
   public user: User[];
   public token;
   public busqueda;
   public fileName: string;

   constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _ufilesService: UloadfService,
      private _userService: UserService
    ){
      this.title = 'Lista de Archivos';
      this.url = GLOBAL.url;
      this.token = this._userService.getToken();
      //this.animal = new Animal('','','',2017,'','');
   }

   ngOnInit(){
     this.getFiles(); 
   }

    getFiles(){
      console.log('componente.list-files funciona correctamente');
      this._ufilesService.getUfiles().subscribe(
        response => {
          if(!response.ufiles){

          }else{
            this.ufiles = response.ufiles;
            console.log(response.ufiles);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
   }

  download(index){
        var id = this.ufiles[index]._id;

        this._ufilesService.getUfile(id)
        .subscribe(
            //data => saveAs(data, file),
            //error => console.error(error)
            response => {
              if(!response.ufile) {

                }else{
                  this.ufile = response.ufile
                  this.fileName = response.ufile.fileu;
                  var pdf = new jsPDF();
                  pdf.save(this.fileName);
                }
            },
            error => {
              console.log(<any>error);
            }
        );
    }


    /*download(index){
        var filename = this.attachmentList[index].uploadname;
        console.log(filename);

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }*/

   /*deletePoll(id){
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
   }*/
 
}