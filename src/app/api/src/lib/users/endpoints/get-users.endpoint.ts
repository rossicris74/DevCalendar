import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import * as UsersType from '../user.type';

// Richiamo tutti i servizi
export const getAllUsersEndpoint = () => `users`;

export type GetAllUsersSuccessResponse = ApiSuccessResponse<UsersType.UserHydraApi>;

export type GetAllUsersFailureResponse = ApiFailureResponse<{}>;
