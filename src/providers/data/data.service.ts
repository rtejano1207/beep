import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import "rxjs/add/operator/take";
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  profileObject: AngularFireObject<Profile>;

  constructor(private database: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
   
    //this.profileObject = this.database.object(`/profiles/${user.uid}`,{preserveSnapshot: true});
   
    return this.profileObject.valueChanges();
    //return this.profileObject.take(1);
    
  }

  async saveProfile(user: User, profile: Profile) {
   this.profileObject = this.database.object(`/profiles/${user.uid}`)
   
   try { 
    await this.profileObject.set(profile);
    return true;

   }
   catch (e) {
    console.error(e);
    return false;
   }
   
  }
}
 