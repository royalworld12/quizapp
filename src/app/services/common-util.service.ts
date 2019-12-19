import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

  constructor(private router: Router) { }

  showAlert(message) {
    alert(message)
  }

  changePath(val) {

    this.router.navigate(['/' + val]);
  }

  setLocalStorage(item, name) {
    localStorage.setItem(name, JSON.stringify(item));
  }

  getLocalStorage(item) {
    const data = JSON.parse(localStorage.getItem(item));

    return data;
  }

}
