import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UploadCsv } from '../../../app/models/uploadfilecsv';
import { GLOBAL1 } from '../../../app/services/global1';
import { UserService } from '../../../app/services/user1.service';
import { UloadfService } from '../../../app/services/uloadf.service';
import { UploadCsvService } from '../../../app/services/uploadcsv.service';
import { fadeLateral } from '../../..//admin/animation/animation';


@Component({
  selector: 'admin-uploadcsv',
  templateUrl: './uploadcsv.component.html',
  providers: [UserService, UloadfService, UploadCsvService],
  animations: [fadeLateral]
})
export class UploadCsvComponent implements OnInit {
  public title: string;
  public title1: string;
  public title2: string;
  public ufilecsv: UploadCsv;
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
      private _uploadCsvService: UploadCsvService 
    ){
    this.title = 'Subir Archivos CSV';
    this.title1 = 'Subir archivo';
    this.title2 = 'Veteria Labs';
    this.url = GLOBAL1.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.ufilecsv = new UploadCsv('',0,'',0,0,0,0,0,0,4,2019);
  }

  ngOnInit(){
    console.log('uploadfiles.component ha sido cargado');
  }

  onSubmit(){
          //Subir el archivo CSV
      if(!this.filesToUpload){
            this._router.navigate(['/admin-panel']);
          }else{
          //Subida de la imagen
             this._uploadCsvService.makeFileRequest(this.url+'upload', [], this.filesToUpload, 'file')
                  .then((result: any) => {
                    console.log(result.file);
                    //this.ufile.fileu = result.fileu;
                  //this._router.navigate(['/admin-panel/listado']);
              }); 
      }
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          this.status = 'error';
        }
      }
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
