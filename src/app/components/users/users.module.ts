import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { UsersComponent} from './users.component';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DxDataGridModule,
  ],
  exports: [UsersComponent]
})
export class UsersModule {}