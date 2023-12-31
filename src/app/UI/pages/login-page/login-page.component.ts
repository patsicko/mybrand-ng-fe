import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TInputProps } from '../../molecules/input-molecule/inputDTO';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  close=faX;
  @Output() closeLoginFormEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder:FormBuilder
  ){}



  emailInput:TInputProps={
    type: 'email',
    placeholder: 'email',
    className: 'border rounded p-2  w-full',
    label: 'Email',
    controlName: 'email',
    
  }

  passwordInput:TInputProps={
    type: 'password',
    placeholder: 'Password',
    className: 'border rounded p-2  w-full',
    label: 'Password',
    controlName: 'password',
    
  }

 login=this.formBuilder.group({
  email:[''],
  password:['']
 })

formData;

  ngOnInit() {
   
  }

  closeForm(value:boolean){
  this.closeLoginFormEvent.emit(value)
  }

  submitForm(){
    this.formData=this.login.value;
    console.log(this.formData);

  }

}
