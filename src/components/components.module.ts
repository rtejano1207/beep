import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from '../components/login-form/login-form-component';
import { RegisterFormComponent } from '../components/register-form/register-form-component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent} from '../components/profile-view/profile-view.component'
import { ProfileSearchComponent } from '../components/profile-search/profile-search.component';

@NgModule({
    declarations: [
         LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent
    ],
    imports: [IonicModule],
    exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent
    ]
})

export class ComponentsModule {

}