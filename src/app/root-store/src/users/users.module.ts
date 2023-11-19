import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as usersReducers from './users.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersReducers.UsersFeatureKey, usersReducers.reducer),
  ],
})
export class ServiziosStoreModule {}