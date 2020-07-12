import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account, GenderType } from '../../../shared/models/Account.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  IsMaleSelected:boolean = true;
  @ViewChild('maleRadio', {static: false}) maleRadio:ElementRef;
  @ViewChild('femaleRadio',{static: false}) femaleRadio:ElementRef;

  constructor(private accountService:AccountService,
    private router : Router) { }

  ngOnInit() {
    console.log("hello");
  }

  onFormSubmit(form:NgForm){
    var tmpAcc:Account = form.value;
    tmpAcc.gender = parseInt(form.controls['gender'].value);

    this.accountService.postAccount(tmpAcc).subscribe(res => {
      console.log(res);
      form.reset();
      console.log("success");
      alert("Success!");
    });

    this.router.navigate(['/authentication/login']);
  }
}
