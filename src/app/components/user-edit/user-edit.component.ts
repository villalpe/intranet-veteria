import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user1.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  public status;
  public url: string;
  public filesToUpload: Array<File>;

  constructor(
  	private _userService: UserService,
  	private _route: ActivatedRoute,
  	private _router: Router,
    private _uploadService: UploadService
  	) { 
  	this.title = 'Actualizar mis datos';
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
  	//Ahora necestitamos que el formulario ya venga poblado con los datos del usuario
  	this.user = this.identity;
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  	console.log('Componente user-edit Intranet cargado');
  }

  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
        response => {
          if(!response.user){
            this.status = 'error';
          }else{
            //Actualizo el localStorage con los datos cambiados del usuario
            this.status = 'success';
            localStorage.setItem('identity', JSON.stringify(this.user));

            //Subida de la imagen
            this._uploadService.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
                .then((result: any) => {
                  this.user.image = result.image;
                  //Actualizo los valores del usuario con la nueva imagen guardada
                  localStorage.setItem('identity', JSON.stringify(this.user));
                  console.log(this.user);                 
                });            
          }
        },
        error => {
          var errorMessage = <any>error;
          if(errorMessage != null){
            this.status = 'error';
          }
        }
    );
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log(this.filesToUpload);
  }
}


