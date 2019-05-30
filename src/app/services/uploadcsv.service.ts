import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL1 } from './global1';

@Injectable()
export class UploadCsvService{
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL1.url;
	}

	//Metodo para hacer una peticion AJAX y poder subir un archivo
	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			console.log(url);
			console.log(params);
			console.log(files.length);
			console.log(name);

			for(var i = 0; i < files.length; i++){
				formData.append(name, files[i], files[i].name);
			}


			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
						console.log(xhr.response);
					}else{
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url, true);
			xhr.send(formData);
		});
	}
}