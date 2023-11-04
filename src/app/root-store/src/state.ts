import * as RoomsState from './rooms/rooms.state';
import * as TestState from './test/state';


export interface State {
    rooms:RoomsState.State;
    test:TestState.State;
  }

export const initialState: State = {
   rooms: RoomsState.initialState,
   test: TestState.initialState
}