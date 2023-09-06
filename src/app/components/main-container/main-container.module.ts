import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevCalendarModule} from '../dev-calendar/dev-calendar.module'
import { MainContainerComponent } from './main-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [FontAwesomeModule,DevCalendarModule, CommonModule],
  exports:[MainContainerComponent],
  providers: [],
})
export class MainContainerModule {}
