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
  showLoader: any = false;
  constructor(private service: MainService, private router: Router, private af: AngularFireAuth) { }

  ngOnInit() {
this.showLoader = JSON.parse(localStorage.getItem('loader'));
this.af.authState.subscribe(user => {
  if(user.uid !== null) {
    this.router.navigate(['/audpress-dashboard']);
  } else {
    this.router.navigate(['/auth']);
  }
});
  }

  facebookLogin(){
    this.showLoader = true;
    localStorage.setItem('loader', 'true');
    this.service.facebookSignIn().then(() => {
      this.router.navigate(['/audpress-dashboard', 'new-serie']);
    }).catch((err) => {
      this.showLoader = false;
      alert(err);
    });
  }
  googleLogin(){
    this.showLoader = true;
    localStorage.setItem('loader', 'true');
    this.service.googleSignIn().then(() => {
      this.showLoader = true;
      this.router.navigate(['/audpress-dashboard', 'new-serie']);
    }).catch((err) => {
      this.showLoader = false;
      alert(err);
    });
  }

}
