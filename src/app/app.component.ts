import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TestState from './root-store/src/test/state';
import * as TestActions from './root-store/src/test/test.actions';
import * as TestSelectors from './root-store/src/test/test.selectors';
@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  getId$ = this.testStore.select(TestSelectors.getId);
  getDescr$ = this.testStore.select(TestSelectors.getDescr);
  constructor(private readonly testStore: Store<TestState.State>) {
  }

  ngOnInit() {
    this.testStore.dispatch(
      TestActions.setTest({
        id: 0,
        descr: 'Test',
      })
    );
    this.getId$.subscribe((id) => console.log('id: ' + id));
    this.getDescr$.subscribe((descr) => console.log('descr: ' + descr));
  }
}
