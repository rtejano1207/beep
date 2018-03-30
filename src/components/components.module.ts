import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from '../components/login-form/login-form-component';
import { RegisterFormComponent } from '../components/register-form/register-form-component';

@NgModule({
    declarations: [
         LoginFormComponent,
    RegisterFormComponent
    ],
    imports: [IonicModule],
    exports: [
        LoginFormComponent,
    RegisterFormComponent
    ]
})

export class ComponentsModule {

}