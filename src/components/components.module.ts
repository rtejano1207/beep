import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from '../components/login-form/login-form-component';
import { RegisterFormComponent } from '../components/register-form/register-form-component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';

@NgModule({
    declarations: [
         LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent
    ],
    imports: [IonicModule],
    exports: [
        LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent
    ]
})

export class ComponentsModule {

}