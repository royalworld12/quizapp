import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { CommonUtilService } from '../../../services/common-util.service'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;
  checkadmin :boolean = false;
  userdata : any;
  constructor(private authservice: AuthService, private commonUtil: CommonUtilService) {

  }

  ngOnInit() {

    if (this.authservice.isLoggedIn() == true) {
      this.isLogin = true;
      this.userdata = this.commonUtil.getLocalStorage('userdet');
      if(this.userdata[0].isadmin == 'Y'){
        this.checkadmin = true;
      }else{
        this.checkadmin = false;
      }
    }

  }

  logout() {

    localStorage.clear();
    location.href = '/login';
  }

}
