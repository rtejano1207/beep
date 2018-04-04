import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RegisterPage } from './register';
import { ComponentsModule } from '../../components/components.module';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class RegisterPageModule {}
