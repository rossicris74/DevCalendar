import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {ServiziComponent} from './servizi.component';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [ServiziComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DxDataGridModule,
  ],
  exports: [ServiziComponent]
})
export class ServiziModule {}