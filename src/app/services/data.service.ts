import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';
@Injectable({
  providedIn: 'root'
})
export class DataService {



  baseUrl = {
    login: 'http://localhost:3300/user/login',
    regsitration: 'http://localhost:3300/user/registration',
    getAllQuizByid: 'http://localhost:3300/quiz/getquizbyid/',
    updateScore: 'http://localhost:3300/quiz/updateScore',
    getAllCategory : 'http://localhost:3300/quiz/getallcategory',
    getAllUser: 'http://localhost:3300/user/allusers',
  };

  // // stage : any = {

  // // };

  // // prod : any = {

  // // }

  constructor(private http: HttpClient) {

  }


  getlogin(params) {
    return this.http.post(this.baseUrl.login, params);
  }
  registration(params) {
    return this.http.post(this.baseUrl.regsitration, params);
  }

  getAllQuizById(params) {
    return this.http.get(this.baseUrl.getAllQuizByid + params);
  }

  updateScore(params) {
    return this.http.post(this.baseUrl.updateScore, params);
  }

  getAllQuizCategory(){
    return this.http.get(this.baseUrl.getAllCategory);
  }

  getAllUser() {
    return this.http.get(this.baseUrl.getAllUser);
  }
}
