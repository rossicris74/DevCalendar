import { Component} from '@angular/core';
import { DevCalendarSandbox } from './dev-calendar.sandbox';

@Component({
  selector: 'dev-calendar',
  templateUrl: './dev-calendar.component.html',
  styleUrls: ['./dev-calendar.component.css'],
  providers: [DevCalendarSandbox],
})

export class DevCalendarComponent {
  constructor(
    readonly devCalendarSandbox: DevCalendarSandbox
  ) {}
}