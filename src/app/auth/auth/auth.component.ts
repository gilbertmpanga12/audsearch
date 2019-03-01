import { Component, OnInit } from '@angular/core';
import {MainService} from '../../main.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private service: MainService, private router: Router, private af: AngularFireAuth) { }

  ngOnInit() {
this.af.authState.subscribe(user => {
  if(user.uid !== null) {
    this.router.navigate(['/audpress-dashboard']);
  } else {
    this.router.navigate(['/auth']);
  }
});
  }

  facebookLogin(){
    this.service.facebookSignIn().then(() => {
      this.router.navigate(['/audpress-dashboard', 'new-serie']);
    }).catch((err) => {
      alert(err);
    });
  }
  googleLogin(){
    this.service.googleSignIn().then(() => {
      this.router.navigate(['/audpress-dashboard', 'new-serie']);
    }).catch((err) => {
      alert(err);
    });
  }

}
