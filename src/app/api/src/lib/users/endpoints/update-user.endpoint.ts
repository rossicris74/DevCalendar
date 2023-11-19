import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Update di un singolo servizio
export const updateUserEndpoint = (id:number) => `login/user/${id}`;

export type UpdateUserSuccessResponse = ApiSuccessResponse<{}>;

export type UpdateUserFailureResponse = ApiFailureResponse<{}>;

export type UpdateUserBody = ApiBody<{}>;