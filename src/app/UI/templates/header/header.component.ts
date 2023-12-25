import { Component, EventEmitter, Output } from '@angular/core';
import { faSun,faMoon,faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


sun=faSun
moon=faMoon
bar=faBars
isSmall:boolean=false

  routeList=[
    {
      route:"/", linkClass:"text-xl px-5" , linkText:"Home"
    },
    {
      route:"/about", linkClass:"text-xl px-5" ,linkText:"About"
    },
    {
      route:"/blog", linkClass:"text-xl px-5" , linkText:"blog"
    },
    {
      route:"/contact", linkClass:"text-xl px-5" , linkText:"Contact"
    }
  ]

  isDark:boolean=true;

  showSignup:boolean=true;
  logedIn:boolean=false
  
 

  @Output() toggleTheme:EventEmitter<boolean> = new EventEmitter<boolean>();

  changeTheme(){
    this.isDark=!this.isDark

    this.toggleTheme.emit(this.isDark)

  }


  toggleMenu(){
this.isSmall=!this.isSmall
  }



}
