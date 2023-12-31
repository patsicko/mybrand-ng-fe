import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TInputProps } from '../../molecules/input-molecule/inputDTO';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent  implements OnInit{
  
  close=faX;
  @Output() closeSignupFormEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder:FormBuilder
  ){}

  firstNameInput:TInputProps={
    type: 'text',
    placeholder: 'First name',
    className: 'border rounded p-2  w-full',
    label: 'First name',
    controlName: 'firstName',
    
  }
  laststNameInput:TInputProps={
    type: 'text',
    placeholder: 'Last name',
    className: 'border rounded p-2  w-full',
    label: 'Lastst name',
    controlName: 'lastName',
    
  }

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

 signupForm=this.formBuilder.group({
  firstName:[''],
  lastName:[''],
  email:[''],
  password:['']
 })

formData;

  ngOnInit() {
   
  }

  closeForm(value:boolean){
  this.closeSignupFormEvent.emit(value)
  }

  submitForm(){
    this.formData=this.signupForm.value;
    console.log(this.formData);
    this.closeSignupFormEvent.emit(false)

  }


  
 
 

 
}
