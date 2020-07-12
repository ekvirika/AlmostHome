import { Component, OnInit, OnDestroy } from '@angular/core';
import { OnlineUserTrackerService } from '../../shared/services/online-user-tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    private user  = this.userTracker.getOnlineUser();
    public userFullName : string;
    constructor(private userTracker : OnlineUserTrackerService,
        private router : Router) { }

    // ngOnDestroy(): void {
    //     window.location.reload();
    // }

    ngOnInit() {
        this.user = this.userTracker.getOnlineUser();
        this.userFullName = this.user.name + " " + this.user.surname;
    }

    logOutClick(){
        this.router.navigate(['/authentication/login']);
        this.userTracker.logOut();
    }

}
