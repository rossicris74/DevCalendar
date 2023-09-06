import { Component} from '@angular/core';
import { fas, faFolder, faHome, faCoffee, fa4 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {

  faHome = faHome;
  faFolder = faFolder;
  fa4 = [faFolder, fa4];
}