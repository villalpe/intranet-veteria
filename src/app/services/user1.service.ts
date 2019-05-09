import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
	public url: string;
	public gettoken: string;
	public identity;
	public token;

	constructor(
		private _http: Http
		){
		this.url = GLOBAL.url;
	}

	register(user_to_register){
		let params = JSON.stringify(user_to_register);
		//La informacion que se va a enviar es de tipo application/json
		let headers = new Headers({'Content-Type':'application/json'});

		//Ahora hacemos la peticion Post con el metodo del API(register) y le pasamos 3 parametros
		return this._http.post(this.url+'register', params, {headers: headers})
					//y usamos map para recoger la respuesta del API
					.map(res => res.json());
	}

	signup(user_to_login, gettoken = null){
		if(gettoken != null){
			user_to_login.gettoken = gettoken;
		}

		let params = JSON.stringify(user_to_login);
		let headers = new Headers({'Content-Type':'application/json'});
		//Hacemos peticion
		return this._http.post(this.url+'login', params, {headers: headers})
					.map(res => res.json());

	}

	getIdentity(){
		//Ocupamos JSON.parse() ya que identity es un objeto
		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){
		//Aqui no ocupamos JSON.parse() ya que el token solo es un string
		let token = localStorage.getItem('token');

		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}
		
		return this.token;
	}

	updateUser(user_to_update){
		let params = JSON.stringify(user_to_update);
		let headers = new Headers({
			//Para actualizar tenemos que pasar el params(body) y el headers(Authorization con el token)
			'Content-Type': 'application/json',
			'Authorization': this.getToken()
		});

		return this._http.put(this.url+'update-user/'+user_to_update._id, params, {headers: headers})
						.map(res => res.json());
	}

	getKeepers(){
		return this._http.get(this.url+'get-keepers').map(res => res.json());
	}	
}