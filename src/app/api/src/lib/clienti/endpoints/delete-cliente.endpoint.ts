import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// delete di una singola stanza
export const deleteClienteEndpoint = (id:number) => `cliente/${id}`;

export type DeleteClienteSuccessResponse = ApiSuccessResponse<{}>;

export type DeleteClienteFailureResponse = ApiFailureResponse<{}>;