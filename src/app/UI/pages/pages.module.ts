import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TemplatesModule } from '../templates/templates.module';
import { AtomsModule } from "../atoms/atoms.module";
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        HomepageComponent,
        SignupPageComponent
    ],
    exports: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        HomepageComponent,
        SignupPageComponent
    ],
    imports: [
        CommonModule,
        MoleculesModule,
        TemplatesModule,
        AtomsModule,
        ReactiveFormsModule
       
    ]
})
export class PagesModule { }
