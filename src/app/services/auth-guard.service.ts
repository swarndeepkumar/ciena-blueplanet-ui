import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    console.log('Authguard#canActivate called '+ this.userService.isAuthenticated);

    if(!this.userService.isAuthenticated){
      console.log('not-auth');
      this.router.navigate(['/signin']);

    }
    return this.userService.isAuthenticated;

  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
