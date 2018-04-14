import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;
  
  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage',{existingProfile: this.existingProfile})
  }

  getExistingProfile(profile : Profile){
    this.existingProfile = profile;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
