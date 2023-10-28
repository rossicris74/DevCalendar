import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {RoomsComponent} from './rooms.component';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RoomsComponent,
    BrowserModule,
    DxDataGridModule,
  ],
  declarations: [RoomsComponent],
  exports:[RoomsComponent],
})
export class RoomsModule {}