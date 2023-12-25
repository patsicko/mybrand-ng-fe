import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mybrand-ng-fe';

  isDark:boolean;

  changeTheme(theme:boolean){
  this.isDark=theme;

  }

}