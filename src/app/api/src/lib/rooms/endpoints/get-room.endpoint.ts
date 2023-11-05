import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { RoomsType } from '../public-api';

// test per git
export const getRoomJsonDbEndpoint = () => `room/`;
export const getRoomLocalEndpoint = () => `/assets/mocks/rooms.mock.json`;

export type GetRoomSuccessResponse = ApiSuccessResponse<RoomsType.Room>;

export type GetRoomFailureResponse = ApiFailureResponse<{}>;

export type GetRoomsBody = ApiBody<{}>;
