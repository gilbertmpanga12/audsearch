import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import {take} from 'rxjs/operators';
import {tap} from 'rxjs/operators';
import {MainService} from './main.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private service: MainService,
    private af: AngularFireAuth, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.service.isAuthenticated) {
        return true;
      }
      return this.af.authState.pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
            if (!loggedIn) {
                this.router.navigate(['/auth']);
            }
        })
      );
  }
}
