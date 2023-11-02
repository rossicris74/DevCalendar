import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// delete di una singola stanza
export const deleteServizioEndpoint = (id:number) => `servizio/${id}`;

export type DeleteServizioSuccessResponse = ApiSuccessResponse<{}>;

export type DeleteServizioFailureResponse = ApiFailureResponse<{}>;