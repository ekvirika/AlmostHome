import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/shared/models/Animal.model';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardCpmponent implements OnInit {
    @Input() animal : Animal = new Animal();
  constructor() { }

  ngOnInit() {
  }

}