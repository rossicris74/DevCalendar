import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as roomsReducers from './rooms.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(roomsReducers.RoomsFeatureKey, roomsReducers.reducer),
  ],
})
export class RoomsStoreModule {}