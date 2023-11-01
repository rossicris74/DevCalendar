import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Create di una stanza
export const createRoomEndpoint = () => "stanza";

export type CreateRoomSuccessResponse = ApiSuccessResponse<{}>;

export type CreateRoomFailureResponse = ApiFailureResponse<{}>;

export type CreateRoomBody = ApiBody<{}>;