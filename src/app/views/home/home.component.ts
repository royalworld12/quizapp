import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonUtilService } from '../../services/common-util.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizcategory: any;
  isSubmitted: boolean = false;
  quizsel = '';
  isshow: boolean = false;
  userData: any;
  constructor(private dataService: DataService, private commonUtilService: CommonUtilService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getAllQuizCategory();
    this.userData = this.commonUtilService.getLocalStorage('userdet');
    console.log(this.userData);
  }

  getValue(value){

this.quizsel = value;
  }

  getAllQuizCategory() {
  
    this.dataService.getAllQuizCategory().subscribe((res: any) => {
      if (res.status) {

        this.quizcategory = res.data;
        this.isshow = true;
  
      }
    })
  }

  submit() {

    if(this.quizsel){
this.router.navigate(['/quiz', this.quizsel])
    }
   else {
     alert('Please Choose atleast one category');
    
    }
  }

 
}
