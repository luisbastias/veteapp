import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario/usuario.module';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyDuvyKd1N7HXhw5j58QMGEBSsNJta_2__Y';
  private cuser = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuvyKd1N7HXhw5j58QMGEBSsNJta_2__Y';
 
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  userToken: string;
  userid: string;

  // Crear nuevo usuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]


  // Login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]


  constructor( private http: HttpClient ,private firestore: AngularFirestore) {
    this.leerToken();
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('idlocal');
  }

  login( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }:signInWithPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'],resp['localId'],resp['email']);
        console.log(resp)
        return resp;
    
      })
   
      );

  }

 

  private guardarToken( idToken: string,localid:string,email:string ) {

    this.userToken = idToken;
    this.userid= localid;
    localStorage.setItem('token', idToken);
    localStorage.setItem('idlocal', localid);
    localStorage.setItem('email', email);
    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }
  private guardarid( localid: string ) {

    this.userid = localid;
    
    localStorage.setItem('idlocal', localid);
    
  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }


  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }


  }
  nuevoUsuario( usuario: UsuarioModel ) {

   
      const authData={...usuario,returnSecureToken:true}
      return this.http.post(this.cuser,authData).pipe(
        map( resp => {
          this.guardarToken(resp['idToken'],resp['localId'],resp['email']);
          return resp;
        })
      );
    }

   

  
 
}
