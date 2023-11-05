import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// delete di una singola stanza
export const deleteRoomEndpoint = (id:number) => `stanze/${id}`;

export type DeleteRoomSuccessResponse = ApiSuccessResponse<{}>;

export type DeleteRoomFailureResponse = ApiFailureResponse<{}>;