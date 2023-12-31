import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mybrand-ng-fe';

  isDark:boolean;

  showModel:boolean=false;
  showLoginModel:boolean=false;

  showSignupModel(value){
  this.showModel=value
  }

  closeSignupModel(){
    this.showModel=false
  }

  showLogin(){
  this.showLoginModel=true;
  }

  closeLoginModel(){
    this.showLoginModel=false;
  }
  changeTheme(theme:boolean){
  this.isDark=theme;

  }

}
