import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as serviziosReducers from './servizi.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(serviziosReducers.ServiziosFeatureKey, serviziosReducers.reducer),
  ],
})
export class ServiziosStoreModule {}