import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {ServiziComponent} from './servizi.component';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    ServiziComponent,
    BrowserModule,
    DxDataGridModule,
  ]
})
export class ServiziModule {}