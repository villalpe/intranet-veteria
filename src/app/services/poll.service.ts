import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class InvoiceService {
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
	}

	addPoll(token, invoice){
		let params = JSON.stringify(invoice);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.post(this.url+'poll', params, {headers: headers})
					.map(res => res.json());
	}

	getPolls(){
		return this._http.get(this.url+'get-polls').map(res => res.json());
	}

	getPoll(id){
		return this._http.get(this.url+'get-poll/'+id).map(res => res.json());
	}

	editPoll(token, id, poll){
		let params = JSON.stringify(poll);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.put(this.url+'update-poll/'+id, params, {headers: headers})
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

		return this._http.delete(this.url+'delete-poll/'+id, options)
						.map(res => res.json());
	}