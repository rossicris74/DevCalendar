import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule, DxSwitchModule } from 'devextreme-angular';
import { DevCalendarComponent } from './dev-calendar.component';

@NgModule({
  declarations: [DevCalendarComponent],
  imports: [DxSchedulerModule, DxSwitchModule, CommonModule],
  providers: [],
})
export class AppModule {}
