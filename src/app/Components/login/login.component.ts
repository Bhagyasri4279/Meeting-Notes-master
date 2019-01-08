import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup , FormBuilder,Validators,FormGroupDirective} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  RegForm: FormGroup;  
  constructor(private fb: FormBuilder,private router: Router) { 
    this.RegForm = fb.group({  
      'email':['user@mss.com', Validators.compose([Validators.required,Validators.email])],  
      'password' : [123456, Validators.compose([Validators.required,Validators.minLength(6)])], 
    })
  }

  ngOnInit() {
  }
 
  onSubmit(){
    this.router.navigateByUrl('dashboard');
    
  }

}
