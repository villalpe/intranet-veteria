import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';
import { GLOBAL1 } from './global1';

@Injectable()
export class UloadfService {
	public url: string;
	public url1: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
		this.url1 = GLOBAL1.url;
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

	/*postCSV(file){
		let params = JSON.stringify(this.file);
		let headers = new Headers({
			'Content-Type': 'application/json'
			//'Authorization': token
		});

		return this._http.post(this.url1+'upload').map(res => res.json());
	}*/

}