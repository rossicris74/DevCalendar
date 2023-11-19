import * as UsersType from '../../../api/src/lib/users/user.type';
export interface State {
  usersList:UsersType.Users
}

export const initialState: State = {
  usersList:[] 
};
