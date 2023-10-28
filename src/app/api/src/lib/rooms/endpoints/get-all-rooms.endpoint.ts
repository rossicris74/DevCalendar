import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { RoomsType } from '../public-api';

export const getAllRoomsJsonDbEndpoint = () => `rooms`;
export const getAllRoomsLocalEndpoint = () => `/assets/mocks/rooms.mock.json`;
// prova per git
export type GetAllRoomsSuccessResponse = ApiSuccessResponse<RoomsType.Rooms>;

export type GetAllRoomsFailureResponse = ApiFailureResponse<{}>;

export type GetAllRoomsBody = ApiBody<{}>;
