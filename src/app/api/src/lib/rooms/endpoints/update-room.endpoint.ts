import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Update di una singola stanza
export const updateRoomEndpoint = (id:number) => `stanza/${id}`;

export type UpdateRoomSuccessResponse = ApiSuccessResponse<{}>;

export type UpdateRoomFailureResponse = ApiFailureResponse<{}>;

export type UpdateRoomBody = ApiBody<{}>;