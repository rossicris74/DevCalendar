import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

// eslint-disable-next-line
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'name',
  },
  selector: 'bf-icon',
  styles: [],
  template: '',
})
export class IconComponent {
  /** FontAwesome classes to use */
  @Input() name = '';
}
