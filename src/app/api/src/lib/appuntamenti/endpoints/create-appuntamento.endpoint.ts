import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Create di un appuntamento
export const createAppuntamentoEndpoint = () => "appuntamento";

export type CreateAppuntamentoSuccessResponse = ApiSuccessResponse<{}>;

export type CreateAppuntamentoFailureResponse = ApiFailureResponse<{}>;

export type CreateAppuntamentoBody = ApiBody<{}>;