import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { RoomsType } from '../public-api';

export const getRoomsJsonDbEndpoint = () => `Rooms`;
export const getRoomsLocalEndpoint = () => `/assets/mocks/rooms.mock.json`;

export type GetRoomsSuccessResponse = ApiSuccessResponse<RoomsType.Rooms>;

export type GetRoomsFailureResponse = ApiFailureResponse<{}>;

export type GetRoomsBody = ApiBody<{}>;
