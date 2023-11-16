import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'linked-icon-box',
  templateUrl: './linked-icon-box.component.html',
  styleUrls: ['./linked-icon-box.component.css']
})

export class LinkedIconBoxComponent {
  @Input() iconName: string ='fa-solid fa-folder-open fa-2x';
  @Output() onClick = new EventEmitter<void>;



}
