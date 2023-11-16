import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as serviziosReducer from './servizi.reducers';
import {ServiziosEffects} from './servizi.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ServiziosEffects]),
    StoreModule.forFeature(serviziosReducer.ServiziosFeatureKey, serviziosReducer.reducer),
  ],
})
export class ServiziStoreModule {}