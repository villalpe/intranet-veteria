import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UploadFile } from '../../../app/models/uploadfile';
import { GLOBAL } from '../../../app/services/global';
import { UserService } from '../../../app/services/user1.service';
import { UloadfService } from '../../../app/services/uloadf.service';
import { UploadService } from '../../../app/services/upload.service';
import { fadeLateral } from '../../..//admin/animation/animation';


@Component({
  selector: 'admin-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  providers: [UserService, UloadfService, UploadService],
  animations: [fadeLateral]
})
export class UploadFilesComponent implements OnInit {
  public title: string;
  public title1: string;
  public title2: string;
  public ufile: UploadFile;
  public identity;
  public token;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private _uloadfService: UloadfService,
      private _uploadService: UploadService 
    ){
    this.title = 'Subir Archivos PDF';
    this.title1 = 'Subir archivo';
    this.title2 = 'The Antivenom Company™';
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ufile = new UploadFile('','',2019,4,'');
  }

  ngOnInit(){
    console.log('uploadfiles.component ha sido cargado');
  }

  onSubmit(){
    this._uloadfService.addUfile(this.token, this.ufile).subscribe(
      response => {
        if(!response.ufile){
          this.status = 'error'
        }else{
          this.status = 'success';
          this.ufile = response.ufile;

          //Subir la imagen del animal
          if(!this.filesToUpload){
            this._router.navigate(['/admin-panel']);
          }else{
          //Subida de la imagen
             this._uploadService.makeFileRequest(this.url+'upload-file/'+this.ufile._id, [], this.filesToUpload, this.token, 'fileu')
                  .then((result: any) => {
                    console.log(result);
                    this.ufile.fileu = result.fileu;
                  //this._router.navigate(['/admin-panel/listado']);
              }); 
          }
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
        }
      }
      )
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
