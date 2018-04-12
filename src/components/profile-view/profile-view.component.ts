import { Component, OnInit } from "@angular/core";
import { AuthServiceProvider } from "../../providers/auth/auth.service";
import { DataServiceProvider } from "../../providers/data/data.service";
import { Profile } from "../../models/profile/profile.interface";
import { User } from "firebase/app";
import { LoadingController, Loading } from "ionic-angular";

@Component({
    selector: 'app-profile-view',
    templateUrl: 'profile-view.component.html'
  })
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;
  loader: Loading;

  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).subscribe(profile => {
        this.userProfile = <Profile>profile;
        this.loader.dismiss();
      })
    })
  }

  constructor(private loading: LoadingController, private data: DataServiceProvider, private auth: AuthServiceProvider) {
    this.loader = this.loading.create({
      content: 'Loading Profile...'
    });
  }

  ionViewWillLoad() {

  }


}