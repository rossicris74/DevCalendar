import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MainContainerSandbox } from './main-container.sandbox';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {
  constructor(private readonly router: Router, readonly mainContainerSandbox: MainContainerSandbox){
  }
  navTo(url_string: string) {
    this.router.navigate([url_string])
  }
}