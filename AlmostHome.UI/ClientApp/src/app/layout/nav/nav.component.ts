import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // public version = environment.version;

  navItems = [
    // { link: '/dashboard/home', title: 'Home' },
    // { link: '/about', title: 'About' },
    // { link: '/contact', title: 'Contact' }
  ];

  constructor() { }

  ngOnInit() {
  }


}
