import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as appuntamentiReducers from './appuntamenti.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appuntamentiReducers.AppuntamentiFeatureKey, appuntamentiReducers.reducer),
  ],
})
export class AppuntamentiStoreModule {}