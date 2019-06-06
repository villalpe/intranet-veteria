import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class InvHwService {
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
	}

	addInvhw(token, invhw){
		let params = JSON.stringify(invhw);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.post(this.url+'invhw', params, {headers: headers})
					.map(res => res.json());
	}

	getInvhws(){
		return this._http.get(this.url+'get-invhws').map(res => res.json());
	}

	getInvhw(id){
		return this._http.get(this.url+'get-invhw/'+id).map(res => res.json());
	}

	editPoll(token, id, invhw){
		let params = JSON.stringify(invhw);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.put(this.url+'update-invhw/'+id, params, {headers: headers})
						.map(res => res.json());
	}

	deletePoll(token, id){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		//Utilizamos RequestOptions para traer todas las opciones de cabeceras.
		let options = new RequestOptions({headers: headers});
		console.log("Id desde el invoice.service: "+id);

		return this._http.delete(this.url+'delete-invhw/'+id, options)
						.map(res => res.json());
	}
}