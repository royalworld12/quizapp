import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor() { }

  public login(params) {
    localStorage.setItem('userdet', JSON.stringify(params));
    return true;
  }

  public isLoggedIn() {

    if (localStorage.getItem('userdet')) {
      // console.log(true)
      return true;
    } else {
      return null;
    }


  }

  public logout() {
    localStorage.removeItem('user_det');
  }
}
