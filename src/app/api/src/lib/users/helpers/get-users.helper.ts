import * as UsersType from '../user.type';
export function fromApiToClient(usersHydraApi: UsersType.UserHydraApi) :UsersType.Users{
    const usersApi: UsersType.UsersApi = usersHydraApi['hydra:member'];
    const users: UsersType.Users = [];
    usersApi.forEach(userApi => {
        const user: UsersType.User  = {
            id: userApi.id,
            username: userApi.username,
            email: userApi.email,
            nome: userApi.nome,
            roles: userApi.roles,
            isVerified: userApi.isVerified,
            isDisabled: userApi.isDisabled,
        };
        users.push(user);
    });
    return users;
}