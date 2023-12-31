import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSun,faMoon,faBars,faX } from '@fortawesome/free-solid-svg-icons';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  socialUser: SocialUser;

  constructor(private socialAuthService: SocialAuthService){}


sun=faSun
moon=faMoon
bar=faBars
close=faX
showFlex:boolean=false

  routeList=[
    {
      route:"/", linkClass:"text-xl px-5 my-5" , linkText:"Home"
    },
    {
      route:"/about", linkClass:"text-xl px-5 " ,linkText:"About"
    },
    {
      route:"/blog", linkClass:"text-xl px-5" , linkText:"blog"
    },
    {
      route:"/contact", linkClass:"text-xl px-5" , linkText:"Contact"
    }
  ]

  isDark:boolean=false;
  @Output() toggleTheme:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showSignupEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() showLoginEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
  logedIn=null;
  showSignupButton:boolean=true;

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.logedIn = user != null;
      this.showSignupButton=false;
      console.log(this.socialUser);
    });
    (error) => {
      console.error('Social login error:', error);
    } 
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.logedIn=null;
  }

  showSignupForm(value:boolean){

    this.showSignupEvent.emit(value)

  }

  showLoginForm(value:boolean){
   this.showLoginEvent.emit(value)
  }
  
  changeTheme(){
    this.isDark=!this.isDark

    this.toggleTheme.emit(this.isDark)

  }


  toggleMenu(){
this.showFlex=!this.showFlex
  }



}
