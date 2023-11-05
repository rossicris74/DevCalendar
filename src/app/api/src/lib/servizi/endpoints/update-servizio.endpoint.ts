import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Update di un singolo servizio
export const updateServizioEndpoint = (id:number) => `servizi/${id}`;

export type UpdateServizioSuccessResponse = ApiSuccessResponse<{}>;

export type UpdateServizioFailureResponse = ApiFailureResponse<{}>;

export type UpdateServizioBody = ApiBody<{}>;