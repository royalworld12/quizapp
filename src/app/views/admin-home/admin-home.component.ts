import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonUtilService } from '../../services/common-util.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  // styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  
  Userdata: any;
  
  constructor(private dataService: DataService, private commonUtilService: CommonUtilService, private router: Router) { }

  ngOnInit() {

    this.getAllUser();
    
  }

 
  getAllUser() {
  
    this.dataService.getAllUser().subscribe((res: any) => {
      if (res.status) {

        this.Userdata = res.data;
      
      }
    })
  }

  
}
