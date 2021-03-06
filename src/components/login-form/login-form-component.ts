 import { Component, EventEmitter, Output } from '@angular/core';
 import { NavController } from 'ionic-angular';
 import { AngularFireAuth} from 'angularfire2/auth';
 import { Account } from '../../models/account/account.interface';
 import { LoginResponse } from '../../models/login/login-response.interface';
 import { AuthServiceProvider } from '../../providers/auth/auth.service';

 /**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form-component.html'
})
export class LoginFormComponent {

  text: string;

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthServiceProvider, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();

    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  async login() {

    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);



    // try {
    //   const result: LoginResponse = {
    //     result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    //   } 
    //   this.loginStatus.emit(result);
    // }
    // catch (e) {
    //   console.error(e);
    //   const error: LoginResponse = {
    //     error: e
    //   }
    //   this.loginStatus.emit(error);
    // }
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

 /*  navigateToPage(pageName: string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  } */

}
 