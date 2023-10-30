import {Injectable} from '@angular/core'

  import {
    MenuNavService,
  } from '../../api/src/lib/menu-nav/menu-nav.service';
  import {
    RoomsService,
  } from '../../api/src/lib/test-be-url/test-be-url.service';
  import * as RoomsBeUrlService from '../../api/src/lib/rooms/rooms.service'
@Injectable()
export class MainContainerSandbox {
    testBeUrl$ = this.testBeUrlService.getAllRoomsJsonDb();
    menuNav$ = this.menuNavService.getMenuNavLocal(); 
    // rooms$ = this.roomsBeUrlService.getAllRoomsBeUrl();
    constructor(
      private readonly menuNavService: MenuNavService,
      private readonly testBeUrlService: RoomsService,
      private readonly roomsBeUrlService: RoomsBeUrlService.RoomsService
    ) {
      this.testBeUrl$.subscribe(ele => console.log(ele));
      //Lancio api be symfony
      // this.rooms$.subscribe(rooms => console.log(rooms));
    }
}