import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
	public title: string;
	public title1: string;
	public user: User;
	public identity;
  public token;
  public status: string;
  constructor(
  	  private _route: ActivatedRoute,
  	  private _router: Router,
      private _userService: UserService
  	) {
  	this.title = 'Intranet Veteria Labs';
  	this.title1 = 'Veteria Labs';
    this.user = new User('','','',0,'','','','','');
   }

  ngOnInit() {
  }

    onSubmit(){
    console.log('Metodo onSubmit');	
    //loguear al usuario y conseguir su objeto
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;
        if(!this.identity || !this.identity._id){
          alert("El usuario no se ha logueado correctamente");
        }else{
          //Para no enviar el password por la red
          this.identity.password = '';
          //Aqui vamos a guardar el this.identity en el localStorage para que persista y 
          //usamos JSON.stringify porque this.identity es un objeto que debemos convertir
          //a string
          localStorage.setItem('identity', JSON.stringify(this.identity));
          //conseguir el token
          this._userService.signup(this.user, 'true').subscribe(
            response => {
                this.token = response.token;

                if(this.token.length <= 0){
                  alert("El token no se ha generado")
                }else{
                  //Tambien vamos a guardar el token en localStorage pero no usamos JSON.stringify ya que
                  //el token es un string
                  localStorage.setItem('token', this.token);
                  this.status = 'success';
                  this._router.navigate(['/']);
                }
              },
              error => {
                console.log(<any>error);
              }
         );

        }
      },
      error => {
        var errorMessage = <any>error;
        //Si hay mensaje de error hacemos un JSON.parse para convertir el mensaje en objeto JSON
        if(!errorMessage != null){
          var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
     );
  }

}
