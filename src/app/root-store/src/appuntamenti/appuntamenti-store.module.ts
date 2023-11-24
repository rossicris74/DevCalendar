import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as appuntamentiReducer from './appuntamenti.reducers';
import {AppuntamentiEffects} from './appuntamenti.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AppuntamentiEffects]),
    StoreModule.forFeature(appuntamentiReducer.AppuntamentiFeatureKey, appuntamentiReducer.reducer),
  ],
})
export class AppuntamentiStoreModule {}