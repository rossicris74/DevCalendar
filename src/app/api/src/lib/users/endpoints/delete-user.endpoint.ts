import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// delete di una singola stanza
export const deleteUserEndpoint = (id:number) => `login/user/${id}`;

export type DeleteUserSuccessResponse = ApiSuccessResponse<{}>;

export type DeleteUserFailureResponse = ApiFailureResponse<{}>;