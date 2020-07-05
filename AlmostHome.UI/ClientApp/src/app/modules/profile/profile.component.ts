import { Component, OnInit } from '@angular/core';
import { OnlineUserTrackerService } from '../../shared/services/online-user-tracker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    private user  = this.userTracker.getOnlineUser();
    public userFullName : string;
    constructor(private userTracker : OnlineUserTrackerService) { }

    ngOnInit() {
        this.user = this.userTracker.getOnlineUser();
        this.userFullName = this.user.name + " " + this.user.surname;
    }

    logOutClick(){
        this.userTracker.logOut();
        console.log("logged out" + this.userTracker.IsUserOnline());
    }

}
