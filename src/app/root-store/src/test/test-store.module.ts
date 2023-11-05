import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromTestReducer from './test.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTestReducer.TestFeatureKey, fromTestReducer.reducer),
  ],
})
export class TestStoreModule {}