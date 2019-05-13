import { Component } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {
  title = 'Editing';
}


/*import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../models/animal';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user1.service';
import { AnimalService } from '../../../services/animal.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;
  public is_edit;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService,
  	private _animalService: AnimalService,
  	private _uploadService: UploadService

  	){
  		this.is_edit = true;
	  	this.title = 'Editando Animales';
	  	this.url = GLOBAL.url;
	  	this.identity = this._userService.getIdentity();
	  	this.token = this._userService.getToken();
	  	this.animal = new Animal('','','',2017,'','');	
  	}

  	ngOnInit(){
  		console.log('edit.component.animal cargado...');
  		this.getAnimal();
  	}


  	getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
          response => {
            if(!response.animal){
                this._router.navigate(['/home']);
              }else{
                this.animal = response.animal;
              }
          },
          error => {
            this._router.navigate(['/home']);
            console.log(<any>error);
          }
        );

    });

  }

  	onSubmit(){
  		var id = this.animal._id;
  		this._animalService.editAnimal(this.token, id, this.animal).subscribe(
	  		response => {
	  			if(!response.animal){
	  				this.status = 'error'
	  			}else{
	  				this.status = 'success';
	  				this.animal = response.animal;

	  				//Subir la imagen del animal
	  				if(!this.filesToUpload){
		  				this._router.navigate(['/animal', this.animal._id]);
	  				}else{
	  				//Subida de la imagen
			         this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
			         	    .then((result: any) => {
			                this.animal.image = result.image;
	       	  				this._router.navigate(['/animal', this.animal._id]);
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