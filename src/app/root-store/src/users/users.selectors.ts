import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './users.state';
import { UsersFeatureKey } from './users.reducers';
import { UsersType } from 'src/app/api/src/lib/users/public-api';


const getUsersListState = (state: State) => state.usersList;
const getUsersState = createFeatureSelector<State>(UsersFeatureKey);
/** Ritorna l'elenco degli users*/
export const getUsersList = createSelector(getUsersState, getUsersListState);
export const getUserList4Group = createSelector( getUsersState,getUsersList, (_, usersList)  => {
    let listUsers4Group: UsersType.ListUsers4Group = [];
    if (usersList?.length > 0){
        usersList.forEach(user => {
            const user4Group : UsersType.User4Group = {id:user.id, text:user.username}
            listUsers4Group.push(user4Group);}
        )
    }
return listUsers4Group;
})
