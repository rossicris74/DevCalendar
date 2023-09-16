import {Injectable} from '@angular/core'

  import {
    MenuNavService,
  } from '../../api/src/lib/menu-nav/menu-nav.service';
@Injectable()
export class MainContainerSandbox {
    menuNav$ = this.menuNavService.getMenuNavLocal(); 
    constructor(
      private readonly menuNavService: MenuNavService,
    ) {}
}