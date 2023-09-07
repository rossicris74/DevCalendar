import *  as TestActions from './test.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './state';

export const TestFeatureKey = 'Test';

const TestReducer = createReducer(
  initialState,

  on(TestActions.setTest, (state, { id, descr }) => ({
    ...state,
    id,
    descr
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return TestReducer(state, action);
}
