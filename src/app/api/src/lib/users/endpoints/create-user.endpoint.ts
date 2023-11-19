import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Create di una stanza
export const createUserEndpoint = () => "login/user";

export type CreateUserSuccessResponse = ApiSuccessResponse<{}>;

export type CreateUserFailureResponse = ApiFailureResponse<{}>;

export type CreateUserBody = ApiBody<{}>;