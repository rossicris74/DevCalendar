import * as UsersType from '../../../api/src/lib/users/user.type';
export interface State {
  usersList:UsersType.Users;
  userList4Group : UsersType.ListUsers4Group;
}

export const initialState: State = {
  usersList:[],
  userList4Group: []
};
