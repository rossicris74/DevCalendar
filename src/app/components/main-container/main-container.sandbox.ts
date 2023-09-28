import {Injectable} from '@angular/core'

  import {
    MenuNavService,
  } from '../../api/src/lib/menu-nav/menu-nav.service';
  import {
    RoomsService,
  } from '../../api/src/lib/test-be-url/test-be-url.service';
@Injectable()
export class MainContainerSandbox {
  testBeUrl$ = this.testBeUrlService.getAllRoomsJsonDb();
    menuNav$ = this.menuNavService.getMenuNavLocal(); 
    constructor(
      private readonly menuNavService: MenuNavService,
      private readonly testBeUrlService: RoomsService,
    ) {
      this.testBeUrl$.subscribe(ele => console.log(ele));
    }
}