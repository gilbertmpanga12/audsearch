import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private af: AngularFireAuth) { }
  googleSignIn() {
    return this.af.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  facebookSignIn() {
    return this.af.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }
}
