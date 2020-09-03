import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private auth: AngularFireAuth) { }


  public iniciarSesion(email: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }


}
