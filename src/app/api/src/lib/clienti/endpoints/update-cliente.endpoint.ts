import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Update di un singolo servizio
export const updateClienteEndpoint = (id:number) => `cliente/${id}`;

export type UpdateClienteSuccessResponse = ApiSuccessResponse<{}>;

export type UpdateClienteFailureResponse = ApiFailureResponse<{}>;

export type UpdateClienteBody = ApiBody<{}>;