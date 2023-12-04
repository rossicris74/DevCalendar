import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule, DxSwitchModule, DxButtonModule } from 'devextreme-angular';
import { DevCalendarComponent } from './dev-calendar.component';

@NgModule({
  declarations: [DevCalendarComponent],
  imports: [DxSchedulerModule, DxSwitchModule, DxButtonModule, CommonModule],
  exports:[DevCalendarComponent],
  providers: [],
})
export class DevCalendarModule {}
