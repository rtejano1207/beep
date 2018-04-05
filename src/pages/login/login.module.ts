import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ComponentsModule } from '../../components/components.module';
 
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class LoginPageModule {}
