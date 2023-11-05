import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoomsComponent } from './rooms.component';
import { CommonModule } from '@angular/common';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations:[RoomsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DxDataGridModule,
  ],
  exports: [RoomsComponent,DxDataGridComponent]
})
export class RoomsModule {}