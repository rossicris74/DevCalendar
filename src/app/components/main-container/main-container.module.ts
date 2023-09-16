import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevCalendarModule} from '../dev-calendar/dev-calendar.module'
import { MainContainerComponent } from './main-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LinkedIconBoxModule} from '../../base/components/linked-iconed-box/linked-icon-box.module'
import { IconModule } from '../../base/components/icon/icon.module';
import { MainContainerRoutingModule } from './main-container-routing.module';
import { MainContainerSandbox } from './main-container.sandbox';

@NgModule({
  declarations: [MainContainerComponent],
  imports: [MainContainerRoutingModule,FontAwesomeModule,DevCalendarModule, LinkedIconBoxModule,CommonModule,IconModule],
  exports:[MainContainerComponent],
  providers: [MainContainerSandbox],
})
export class MainContainerModule {}
