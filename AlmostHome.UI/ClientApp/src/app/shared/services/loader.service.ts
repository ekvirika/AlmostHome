import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {

  private isLoading : boolean = false;
  public loadingStatus:Subject<boolean> = new Subject();
  constructor() { }

  ngOnInit() {
  }

  get loading():boolean {
    return this.isLoading;
  }

  set loading(value:boolean) {
    this.isLoading = value;
    this.loadingStatus.next(value);
  }

  // public startLoading() {
  //   this.loading = true;
  //   $("body").css("overflow","hidden");
  // }

  // public stopLoading() {
  //   this.loading = false;
  //   $("body").css("overflow", "visible")
  // }
}