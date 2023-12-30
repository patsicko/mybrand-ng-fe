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
import { LoginPageComponent } from './login-page/login-page.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { QuillModule } from 'ngx-quill'





@NgModule({
    declarations: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        HomepageComponent,
        SignupPageComponent,
        LoginPageComponent
    ],
    exports: [
        AboutComponent,
        BlogComponent,
        ContactComponent,
        HomepageComponent,
        SignupPageComponent,
        LoginPageComponent
    ],
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('63754100136-r3ga1asjit8hr55jl4edb18apeu1nr0s.apps.googleusercontent.com'),
            },
          ],
        } as SocialAuthServiceConfig,
      },
    ],
    imports: [
        CommonModule,
        MoleculesModule,
        TemplatesModule,
        AtomsModule,
        ReactiveFormsModule,
        SocialLoginModule,
        QuillModule
       
    ]
})
export class PagesModule { }
