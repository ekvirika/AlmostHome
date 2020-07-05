import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Account } from '../models/Account.model';

@Injectable({
  providedIn: 'root'
})
export class OnlineUserTrackerService {
  private onlineUser:Account = null;
  private static _instance:OnlineUserTrackerService = null;
  public UserStatus:Subject<boolean>  = new Subject();

  private constructor() { 
    try {
      if(localStorage["user"].length != 0 || localStorage["user"] != undefined){
        this.onlineUser = JSON.parse(localStorage["user"]);
        console.log("User Tracked");
      }
      else{
        this.onlineUser = null;
        console.log("not tracked")
      }

      console.log(this.onlineUser);
    } catch(arr) {}
  }

  public static Instance():OnlineUserTrackerService {
    if(this._instance == null) {
      this._instance = new OnlineUserTrackerService();
    }
    return this._instance;
  }

  public IsUserOnline = () => this.onlineUser != null;
  public logOut():void {
    this.onlineUser == null;
    localStorage["user"] = "";
    this.UserStatus.next(this.IsUserOnline());
  }

  public logIn(user:Account):void {
    console.log(user);
    this.onlineUser = user;
    this.saveUserInLocalStorage();
    console.log(this.onlineUser);
    this.UserStatus.next(this.IsUserOnline());
  }
  public getOnlineUser = () => this.onlineUser;

  private saveUserInLocalStorage() {
    localStorage["user"] = JSON.stringify(this.onlineUser);
  }
}
