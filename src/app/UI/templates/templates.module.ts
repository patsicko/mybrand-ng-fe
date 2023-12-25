import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtomsModule } from '../atoms/atoms.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    FontAwesomeModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class TemplatesModule { }
