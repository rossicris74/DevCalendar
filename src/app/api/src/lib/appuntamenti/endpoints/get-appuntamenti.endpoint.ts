import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import * as AppuntamentiType from '../appuntamenti.type';

// Richiamo tutti gli appuntamenti da BE symfony
export const getAllAppuntamentiEndpoint = () => `appuntamentos`;

// Richiamo tutti gli appuntamenti da local
export const getAllAppuntamentiLocalEndpoint = () =>  `/assets/mocks/appuntamenti.mock.json`;

export type GetAllAppuntamentiSuccessResponse = ApiSuccessResponse<AppuntamentiType.AppuntamentoHydraApi>;

export type GetAllServiziFailureResponse = ApiFailureResponse<{}>;
