import { Component, Output, EventEmitter } from '@angular/core';
import { AuthServiceProvider } from '../../providers/auth/auth.service'
import { ToastController } from 'ionic-angular'

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */ 
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form-component.html'
})
export class RegisterFormComponent {

  text: string;
  account = {}  as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>

  constructor( private afAuth: AuthServiceProvider) {

    this.registerStatus = new EventEmitter<LoginResponse>();
    // console.log('Hello RegisterFormComponent Component');
    // this.text = 'Hello World';
  }
  
  async register() {
    try {
      const result = await 
        this.afAuth.createUserWithEmailAndPassword(this.account)
        this.registerStatus.emit(result);
        // this.toast.create({
        //   message: "Account successfully created.",
        //   duration: 3000
        // }).present();
        // console.log(result);
    }
    catch(e)
    {
      console.error(e);
      this.registerStatus.emit(e);
      // this.toast.create({
      //   message: e.message,
      //   duration: 3000
      // }).present();
    }
    
  }
}
