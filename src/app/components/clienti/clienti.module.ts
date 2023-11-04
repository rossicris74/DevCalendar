import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {ClientiComponent} from './clienti.component';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations:[ClientiComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DxDataGridModule,
  ],
  exports: [ClientiComponent]
})
export class ClientiModule {}