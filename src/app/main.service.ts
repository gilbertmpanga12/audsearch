import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  firebaseAuthState: any = null;
  tokenResult: any;
  firebaseId: any;

  constructor(private af: AngularFireAuth) {
    this.af.authState.subscribe(user => {
      if (user !== null) {
        this.firebaseAuthState = user;
        this.firebaseId = user.uid;
        // this.email = user.email;
        user.getIdTokenResult().then(result => {
          this.tokenResult =  result.token;
        });
      }
    });
  }
  googleSignIn() {
    return this.af.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  facebookSignIn() {
    return this.af.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }
  get isAuthenticated() {
    return this.firebaseAuthState !== null;
  }
  logout() {
    localStorage.removeItem('loader');
    this.af.auth.signOut();
  }
}
