import { Component } from '@angular/core';
import { TInputProps } from '../../molecules/input-molecule/inputDTO';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nameInput:TInputProps={
    type: 'text',
    placeholder: 'Names',
    className: 'border rounded p-2  w-full',
    label: 'Names',
    controlName: 'name',
    
  }

  emailInput:TInputProps={
    type: 'email',
    placeholder: 'Email',
    className: 'border rounded p-2  w-full',
    label: 'Email',
    controlName: 'email'
  }

  countryInput:TInputProps={
    type: 'text',
    placeholder: 'Country',
    className: 'border rounded p-2  w-full',
    label: 'Country',
    controlName: 'country'
  }

  cityInput:TInputProps={
    type: 'text',
    placeholder: 'City',
    className: 'border rounded p-2  w-full',
    label: 'City',
    controlName: 'city'
  }


  textInput:TInputProps={
    type: 'textarea',
    placeholder: 'add your message',
    className: 'border rounded w-full p-2   h-60 ',
    label: 'Message',
    controlName: 'message'
  }

constructor(private formBuilder :FormBuilder,
  private toastr: ToastrService){}


  data=''
  myForm= this.formBuilder.group({
    name: [''],
    email:[''],
    
    address: this.formBuilder.group({
      country: [''],
      city:['']
    }),
    message:[''],
   
    
  })

  get addressForm() {
    return this.myForm.get('address') as FormGroup;
  }

 

  submitForm(){
    this.toastr.success('Your message sent successfully');
    this.data=JSON.stringify(this.myForm.value)
  }
  
}
