import { Component, OnInit } from '@angular/core';
import {MainService} from '../../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private service: MainService, private router: Router) { }

  ngOnInit() {
  }

  facebookLogin(){
    this.service.facebookSignIn().then(() => {
      this.router.navigate(['/']);
    }).catch((err) => {
      alert(err);
    });
  }
  googleLogin(){
    this.service.googleSignIn().then(() => {
      this.router.navigate(['/']);
    }).catch((err) => {
      alert(err);
    });
  }

}
