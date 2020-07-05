import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import * as places from 'places.js';
import places from "places.js";
import { NgForm } from '@angular/forms';
import { Animal } from 'src/app/shared/models/Animal.model';
import { AnimalService } from '../../../shared/services/animal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy{

  @Input() id;
  IsMaleSelected:boolean = true;
  @ViewChild('maleRadio', {static: false}) maleRadio:ElementRef;
  @ViewChild('femaleRadio',{static: false}) femaleRadio:ElementRef;

  constructor(
    public activeModal: NgbActiveModal,
    private animalService : AnimalService
  ) { }

  ngOnDestroy(): void {
  }

  public ngOnInit(): void {

  }

  onFormSubmit(form:NgForm){
    var newAnimal : Animal = form.value;
    newAnimal.sex = parseInt(form.controls['sex'].value);
    newAnimal.animalCategory = parseInt(form.controls['animalCategory'].value);
    this.animalService.postAnimal(newAnimal).subscribe(res => {
      console.log(res);
      form.reset();
      console.log("success");
      alert("Success!");
    })
  }


  onSuggestion($event) {
    console.log($event);
  }
  onClear($event) {
    console.log($event);
  }

}
