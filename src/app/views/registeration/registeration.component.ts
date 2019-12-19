import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { DataService} from '../../services/data.service';
import { CommonUtilService} from '../../services/common-util.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registrationForm: FormGroup;
  isSubmitted  =  false;

  constructor(private dataService : DataService,private commonUtilService : CommonUtilService,private router : Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
console.log('hiii');
    this.registrationForm  =  this.formBuilder.group({
      name : ['',Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      checkadmin : ['N']
  });
  }

  get formControls() { return this.registrationForm.controls; }

  register(){
    
  
    this.isSubmitted = true;
    if(this.registrationForm.valid){
      let params = {
        name : this.registrationForm.get('name').value,
        email : this.registrationForm.get('email').value,
        password : this.registrationForm.get('password').value,
        isadmin : this.registrationForm.get('checkadmin').value
      }
      
     this.dataService.registration(params).subscribe((res : any)=>{
       if(res.status){
         this.commonUtilService.showAlert('Successfully registered')
        this.router.navigateByUrl('/login');
       }
     })
    }else{
      
     
      return;
    }
    
 
  }

}
