import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class UloadfService {
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
	}

	addUfile(token, ufile){
		let params = JSON.stringify(ufile);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.post(this.url+'saveufile', params, {headers: headers})
					.map(res => res.json());
	}

	getUfiles(){
		return this._http.get(this.url+'getufiles').map(res => res.json());
	}

	getUfile(id){
		return this._http.get(this.url+'getufile/'+id).map(res => res.json());
	}

	/*getAnimal(id){
		return this._http.get(this.url+'get-animal/'+id).map(res => res.json());
	}

	editAnimal(token, id, animal){
		let params = JSON.stringify(animal);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.put(this.url+'update-animal/'+id, params, {headers: headers})
						.map(res => res.json());
	}

	deleteAnimal(token, id){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		//Utilizamos RequestOptions para traer todas las opciones de cabeceras.
		let options = new RequestOptions({headers: headers});
		console.log("Id desde el animal.service: "+id);

		return this._http.delete(this.url+'delete-animal/'+id, options)
						.map(res => res.json());
	}*/
}