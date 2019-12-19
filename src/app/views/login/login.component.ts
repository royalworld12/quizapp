import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { CommonUtilService } from '../../services/common-util.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private dataService: DataService, private authService: AuthService, private commonUtilService: CommonUtilService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.commonUtilService.getLocalStorage('userdet')) {
      this.router.navigate(['home'])
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {

    this.isSubmitted = true;
    if (this.loginForm.valid) {
      let params = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      }
      this.dataService.getlogin(params).subscribe(async(res: any) => {
        if (res.status) {
         
          if(res.data.length > 0){
            await this.authService.login(res.data);
            if(res.data[0].isadmin == 'N'){
              window.location.href="/home"
             }else{
              window.location.href="/admin-home"
             }
          }
         
        
        }else{
          alert(res.message)
        }
      })
    } else {
      return;
    }


  }


}
