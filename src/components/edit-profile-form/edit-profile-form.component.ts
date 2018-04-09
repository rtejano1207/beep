import { Component, OnDestroy } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface'
import { DataServiceProvider} from '../../providers/data/data.service';
import { AuthServiceProvider } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {

  text: string;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;
  
  constructor(private auth: AuthServiceProvider, private data: DataServiceProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
    console.log('Hello EditProfileFormComponent Component');
    this.text = 'Hello World';
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      console.log(result);
    }
    
  }

  ngOnDestroy(): void {;
    this.authenticatedUser$.unsubscribe();
  }
}
