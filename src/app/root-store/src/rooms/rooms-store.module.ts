import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as roomsReducer from './rooms.reducers';
import {RoomsEffects} from './rooms.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([RoomsEffects]),
    StoreModule.forFeature(roomsReducer.RoomsFeatureKey, roomsReducer.reducer),
  ],
})
export class RoomsStoreModule {}