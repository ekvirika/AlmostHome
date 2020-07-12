import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountDto } from '../../../shared/models/AccountDto.Model';
import { Account } from '../../../shared/models/Account.model';
import { OnlineUserTrackerService } from '../../../shared/services/online-user-tracker.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accounts : Account[] = [];
  constructor(private accountService : AccountService,
    private router : Router) {  }

  
  ngOnInit() {
    this.accountService
      .getAllAccounts()
       .subscribe(
         data => {
           this.accounts = data;
           console.log(data);
         },
         error => {
           console.log(error);
         });
  }

  public onFormSubmit(form:NgForm){
    let accountDto : AccountDto = form.value;
    let searchedAccount = this.accounts
          .find(o => o.email == accountDto.email
            && o.password == accountDto.password);
    console.log(searchedAccount);

          
    if(searchedAccount != null){
      console.log(searchedAccount);
      OnlineUserTrackerService.Instance().logIn(searchedAccount);
    } else {
      console.log("error");
    }

    this.router.navigate(['/profile']);
  }
}
