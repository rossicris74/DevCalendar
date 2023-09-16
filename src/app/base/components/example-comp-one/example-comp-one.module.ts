import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExampleCompOneComponent} from './example-comp-one.component';


@NgModule({
  declarations: [ExampleCompOneComponent],
  imports: [ CommonModule],
  exports:[ExampleCompOneComponent],
  providers: [],
})
export class LinkedIconBoxModule {}
