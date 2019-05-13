import { Component } from '@angular/core';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  title = 'Adding';
}


/*import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user1.service';
import { AnimalService } from '../../../services/animal.service';
import { UploadService } from '../../../services/upload.service';


@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class AddComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		private _animalService: AnimalService,
  		private _uploadService: UploadService	
  	){
  	this.title = 'Agregando Animales';
  	this.url = GLOBAL.url;
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();
  	this.animal = new Animal('','','',2017,'','');
  }

  ngOnInit(){
  	console.log('animal.add.component ha sido cargado');
  }

  onSubmit(){
  	this._animalService.addAnimal(this.token, this.animal).subscribe(
  		response => {
  			if(!response.animal){
  				this.status = 'error'
  			}else{
  				this.status = 'success';
  				this.animal = response.animal;

  				//Subir la imagen del animal
  				if(!this.filesToUpload){
	  				this._router.navigate(['/admin-panel/listado']);
  				}else{
  				//Subida de la imagen
		         this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
		         	    .then((result: any) => {
		                this.animal.image = result.image;
       	  				this._router.navigate(['/admin-panel/listado']);
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
      console.log(this.filesToUpload);
  }
}*/
