import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-molecule',
  templateUrl: './text-molecule.component.html',
  styleUrls: ['./text-molecule.component.css']
})
export class TextMoleculeComponent {
@Input() textHeader:string | null;
@Input() textClass:string;
@Input() text:string;

@Input() source:string;
@Input() alt:string;
@Input() imageClass:string;

@Input() imageContainerClass:string;
@Input() textHeaderClass:string;
@Input() textMoleculeClass:string;

@Input() showImage: boolean = true;

}
