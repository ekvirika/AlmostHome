import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { Animal } from 'src/app/shared/models/Animal.model';
import { AnimalService } from '../../shared/services/animal.service';
import { OnlineUserTrackerService } from 'src/app/shared/services/online-user-tracker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent implements OnInit {
  allAnimal : Animal[];
  dogs : Animal[];
  cats : Animal[];
  birds : Animal[];
  public userIsOnline:boolean = OnlineUserTrackerService.Instance().IsUserOnline();
  private statusSubscription: Subscription;
  constructor(
    private modalService: NgbModal,
    private animalService : AnimalService,
    
  ) { }

  public ngOnInit() {
    this.animalService
    .getAllAnimals()
     .subscribe(
       data => {
         this.allAnimal = data;
         console.log(data);
         this.sortAnimals();
       },
       error => {
         console.log(error);
       });

       this.statusSubscription = OnlineUserTrackerService
       .Instance().UserStatus
       .subscribe(status => {
         this.userIsOnline = status;
       })

  }

  public sortAnimals(){
    this.dogs = this.filterAnimals(this.allAnimal, o => o.animalCategory == 1);
    this.cats = this.filterAnimals(this.allAnimal, o => o.animalCategory == 2);
    this.birds = this.filterAnimals(this.allAnimal, o => o.animalCategory == 3);
  }

  public filterAnimals(arr, logic){
    return arr.filter(logic);
  }

  public openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.id = 1;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }
}
