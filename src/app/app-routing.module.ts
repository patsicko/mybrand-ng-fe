import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './UI/pages/about/about.component';
import { ContactComponent } from './UI/pages/contact/contact.component';
import { HomepageComponent } from './UI/pages/homepage/homepage.component';
import { BlogComponent } from './UI/pages/blog/blog.component';
import { SignupPageComponent } from './UI/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './UI/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  }
  ,
  {

    path:"about",
    component:AboutComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:'signup',
    component:SignupPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
