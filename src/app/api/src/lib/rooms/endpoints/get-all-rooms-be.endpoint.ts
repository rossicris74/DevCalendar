import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import * as RoomsType from '../rooms.type';

// Richiamo tute le stanze da symfony
export const getAllRoomsBeUrlEndpoint = () => `stanzas`;

export type GetAllRoomsBeSuccessResponse = ApiSuccessResponse<RoomsType.RoomHydraApi>;

export type GetAllRoomsBeFailureResponse = ApiFailureResponse<{}>;

export type GetAllRoomsBeBody = ApiBody<{}>;
