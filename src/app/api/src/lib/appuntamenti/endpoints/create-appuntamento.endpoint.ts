import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { AppuntamentiType } from '../public-api';

// Create di un appuntamento
export const createAppuntamentoEndpoint = () => "appuntamento";

export type CreateAppuntamentoSuccessResponse = ApiSuccessResponse<AppuntamentiType.AppuntamentoInsUpdApi>;

export type CreateAppuntamentoFailureResponse = ApiFailureResponse<{}>;

export type CreateAppuntamentoBody = ApiBody<{}>;