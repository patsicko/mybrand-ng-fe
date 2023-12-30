import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent  implements OnInit{
  
  
  socialUser!: SocialUser;
  isLoggedin?: boolean;

 

  constructor(
   
    private socialAuthService: SocialAuthService
  ){}

  ngOnInit() {
   
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
    (error) => {
      console.error('Social login error:', error);
    } 
  }


  loginWithGoogle(): void {

  
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);

  
    
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
 
 

 
}
