import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonUtilService } from '../../services/common-util.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import $ from "jquery";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  // styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizdata: any;
  category_id : string;
  isSubmitted: boolean = false;
  quizForm: FormGroup;
  isshow: boolean = false;
  userData: any;
  constructor(private dataService: DataService, private commonUtilService: CommonUtilService, private router: Router, private formBuilder: FormBuilder,private route : ActivatedRoute) { 
    
    this.category_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getAllQuiz();
    this.userData = this.commonUtilService.getLocalStorage('userdet');
    console.log(this.userData);
  }

  get formControls() {
    return this.quizForm.controls;
  }

  setForm() {
    console.log(this.quizdata.length);
    const formGroup = {};
    for (let i = 0; i < this.quizdata.length; i++) {
      // console.log(this.quizdata[i]['ans'])
      formGroup[`quest${i + 1}`] = new FormControl('', [
        Validators.required]);
      formGroup[`ans${i + 1}`] = new FormControl(this.quizdata[i]['ans']);
    }

    this.quizForm = new FormGroup(formGroup);
    this.isshow = true;

  }



  getAllQuiz() {
    let params = this.category_id;
    this.dataService.getAllQuizById(params).subscribe((res: any) => {
      if (res.status) {

        this.quizdata = res.data;
        this.setForm();
      }
    })
  }

  submit() {
    this.isSubmitted = true;
   
    if (this.quizForm.valid) {
      // console.log(this.quizdata.length)
      let counter = 0;
      for (let i = 1; i <= this.quizdata.length; i++) {

        if (this.quizForm.get(`quest${i}`).value == this.quizForm.get(`ans${i}`).value) {
          counter++;
        }
      }
      // console.log(counter,this.quizdata.length)
      let params = {
        score: counter + '/' + this.quizdata.length,
        userid: this.userData[0].id
      }
      this.dataService.updateScore(params).subscribe((res: any) => {
        if (res.status) {
          localStorage.setItem('score', JSON.stringify(params));
          this.router.navigate(['result']);
        }
      })

    } else {
     alert('Please Check all questions');
     $(window).scrollTop(0);
    }
  }

}
