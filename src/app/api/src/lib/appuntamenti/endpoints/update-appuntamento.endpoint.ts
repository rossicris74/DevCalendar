import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Update di un singolo appuntamento
export const updateAppuntamentoEndpoint = (id:number) => `appuntamento/${id}`;

export type UpdateAppuntamentoSuccessResponse = ApiSuccessResponse<{}>;

export type UpdateAppuntamentoFailureResponse = ApiFailureResponse<{}>;

export type UpdateAppuntamentoBody = ApiBody<{}>;