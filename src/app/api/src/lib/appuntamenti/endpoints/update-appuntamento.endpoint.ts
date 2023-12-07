import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { AppuntamentiType } from '../public-api';

// Update di un singolo appuntamento
export const updateAppuntamentoEndpoint = (id:number) => `appuntamento/${id}`;

export type UpdateAppuntamentoSuccessResponse = ApiSuccessResponse<AppuntamentiType.AppuntamentoInsUpdApi>;

export type UpdateAppuntamentoFailureResponse = ApiFailureResponse<{}>;

export type UpdateAppuntamentoBody = ApiBody<AppuntamentiType.AppUpdApi>;