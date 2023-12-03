import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as clientiReducer from './clienti.reducers';
import {ClientiEffects} from './clienti.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ClientiEffects]),
    StoreModule.forFeature(clientiReducer.ClientiFeatureKey, clientiReducer.reducer),
  ],
})
export class ClientiStoreModule {}