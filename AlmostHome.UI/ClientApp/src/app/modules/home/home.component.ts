import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit  {
  
  ngOnInit(): void {
    AOS.init();
    this.addTextAnimation();
  }

  addTextAnimation(){
    var options = {
      strings: ['', 'ახალი <br> საუკეთესო <br> მეგობარი'],
      typeSpeed: 40
    };
    
    // var typed = new Typed('#typed', {
    //   stringsElement: '#typed-strings'
    // });    
    var typed = new Typed('#typed', options);
  }
}
