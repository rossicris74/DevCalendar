import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as UsersReducer from './users.reducers';
import {UsersEffects} from './users.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(UsersReducer.UsersFeatureKey, UsersReducer.reducer),
  ],
})
export class UsersStoreModule {}