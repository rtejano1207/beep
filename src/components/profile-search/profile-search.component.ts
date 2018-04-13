import {Component} from '@angular/core';
import { DataServiceProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';

@Component({
    selector: 'app-profile-search',
    templateUrl: 'profile-search.component.html'
})

export class ProfileSearchComponent {
     
    query : string;

    profileList: Profile[];
    
    constructor(private data: DataServiceProvider) {

    }

    searchUser(query: string) {
        this.data.searchUser(query).subscribe(profiles => {
            console.log(profiles);
            this.profileList = <any[]>profiles;
        })
    }
}  