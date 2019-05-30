import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL1 } from './global1';

@Injectable()
export class InvoiceService {
	public url: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL1.url;
	}

	addInvoice(token, invoice){
		let params = JSON.stringify(invoice);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.post(this.url+'invoice', params, {headers: headers})
					.map(res => res.json());
	}

	getInvoices(){
		return this._http.get(this.url+'getsaldos').map(res => res.json());
	}

	getInvoice(id){
		return this._http.get(this.url+'get-invoice/'+id).map(res => res.json());
	}

	editInvoice(token, id, invoice){
		let params = JSON.stringify(invoice);
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});

		return this._http.put(this.url+'update-invoice/'+id, params, {headers: headers})
						.map(res => res.json());
	}

	deleteInvoice(token, id){
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': token
		});
		//Utilizamos RequestOptions para traer todas las opciones de cabeceras.
		let options = new RequestOptions({headers: headers});
		console.log("Id desde el invoice.service: "+id);

		return this._http.delete(this.url+'delete-invoice/'+id, options)
						.map(res => res.json());
	}



}