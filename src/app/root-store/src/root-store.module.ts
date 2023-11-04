import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomsStoreModule } from './rooms/rooms-store.module'
import { TestStoreModule } from './test/test-store.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoomsStoreModule,
    TestStoreModule
  ],
})
export class RootStoreModule {}