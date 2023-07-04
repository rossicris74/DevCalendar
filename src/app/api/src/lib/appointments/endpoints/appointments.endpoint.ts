import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { AppointmentsType } from '../public-api';

export const getAppointmentsJsonDbEndpoint = () => `Appointments`;
export const getAppointmentsLocalEndpoint = () =>
  `/assets/mocks/appointments.mock.json`;

export type GetAppointmentsSuccessResponse =
  ApiSuccessResponse<AppointmentsType.AppointmentsAPI>;

export type GetAppointmentsFailureResponse = ApiFailureResponse<{}>;

export type GetAppointmentsBody = ApiBody<{}>;
