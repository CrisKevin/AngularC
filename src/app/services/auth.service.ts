import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword,
      GoogleAuthProvider,
    onAuthStateChanged,
    getAuth,
    sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  sendEmailVerification,
  User } from '@angular/fire/auth';     
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  getUser(){
    return this.auth.currentUser;
  }

  register(email:string, pass:string){

    return createUserWithEmailAndPassword(this.auth, email, pass)

  }


  loginconcredenciales(user:string, pass:string){

    return signInWithEmailAndPassword(this.auth, user, pass)

  }


  loginwithgoogle(){

    return signInWithPopup(this.auth, new GoogleAuthProvider());

  }



  async logout(){
    return signOut(this.auth);
  }
}
