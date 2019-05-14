import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UploadService{
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
	}

	//Metodo para hacer una peticion AJAX y poder subir un archivo
	makeFileRequest(url: string, params: Array<string>, files: Array<File>, token: string, name: string){
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			console.log(files.length);

			for(var i = 0; i < files.length; i++){
				formData.append(name, files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url, true);
			xhr.setRequestHeader('Authorization', token);
			xhr.send(formData);
		});
	}
}