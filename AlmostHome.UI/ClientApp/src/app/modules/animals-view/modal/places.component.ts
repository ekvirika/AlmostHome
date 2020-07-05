import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
  } from "@angular/core";
//   import places from "places.js";
  
  @Component({
    selector: "app-places",
    template: `
      <input #input type="search" placeholder="Where are we going?" />
    `
  })
  export class PlacesComponent implements AfterViewInit, OnDestroy, OnChanges {
      ngOnChanges(changes: SimpleChanges): void {
          throw new Error("Method not implemented.");
      }
      ngOnDestroy(): void {
          throw new Error("Method not implemented.");
      }
      ngAfterViewInit(): void {
          throw new Error("Method not implemented.");
      }
//     private instance = null;
  
//     @ViewChild('input', {static: false}) input! : HTMLInputElement;
//     @Output() onChange? = new EventEmitter();
//     @Output() onClear? = new EventEmitter();
  
//     @Input() type: string;
  
//     ngAfterViewInit() {

//       this.instance = places({
//         appId: "plEUM4BRK2QI",
//         apiKey: "e37ce71b73124ad0c24360b5548e9241",
//         container: this.input,
//         // type: this.type
//       });
//       this.instance.on("change", e => {
//         this.onChange.emit(e);
//       });
  
//       this.instance.on("clear", e => {
//         this.onClear.emit(e);
//       });
//     }
//     ngOnChanges(changes: SimpleChanges) {
//       if (changes.type && this.instance) {
//         this.instance.configure({
//           type: changes.type.currentValue,
//         });
//       }
//     }
//     ngOnDestroy() {
//       this.instance.removeAllListeners("change");
//       this.instance.removeAllListeners("clear");
//       this.instance.destroy();
//     }
  }