import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnlineUserTrackerService } from '../../../shared/services/online-user-tracker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  public userIsOnline:boolean = OnlineUserTrackerService.Instance().IsUserOnline();
  private statusSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.statusSubscription = OnlineUserTrackerService
    .Instance().UserStatus
    .subscribe(status => {
      this.userIsOnline = status;
    })
  }


  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }
  
}
