import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './UI/pages/about/about.component';
import { ContactComponent } from './UI/pages/contact/contact.component';
import { HomepageComponent } from './UI/pages/homepage/homepage.component';
import { BlogComponent } from './UI/pages/blog/blog.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
