import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { UserApi } from '../users/user-api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserApi{
  isAuthenticated = false;

  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean) : Observable <any> {
    this.isAuthenticated = true;
    console.log('SignIn = username -'+ username + 'password -'+ password);
    return of({});
    //return of({}).pipe(delay(200)).pipe(flatMap(x=>throwError('Invalid User Name and/or Passowd')));
  } 

  signOut(): Observable<any>{
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
    return of({});
  }
}
