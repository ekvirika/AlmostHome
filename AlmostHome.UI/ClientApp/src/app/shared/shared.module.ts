import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ReadMoreButtonComponent } from './components/read-more-button/read-more-button.component';



@NgModule({
  declarations: [
    LoaderComponent, 
    ReadMoreButtonComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    LoaderComponent,
    ReadMoreButtonComponent
  ],
})
export class SharedModule { }
