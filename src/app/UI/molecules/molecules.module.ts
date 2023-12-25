import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { NavComponent } from './nav/nav.component';
import { TextMoleculeComponent } from './text-molecule/text-molecule.component';
import { InputMoleculeComponent } from './input-molecule/input-molecule.component';



@NgModule({
  declarations: [
    NavComponent,
    TextMoleculeComponent,
    InputMoleculeComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],

  exports:[
    NavComponent,
    TextMoleculeComponent,
    InputMoleculeComponent
  ]
})
export class MoleculesModule { }
