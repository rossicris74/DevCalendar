import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Create di una stanza
export const createClienteEndpoint = () => "cliente";

export type CreateClienteSuccessResponse = ApiSuccessResponse<{}>;

export type CreateClienteFailureResponse = ApiFailureResponse<{}>;

export type CreateClienteBody = ApiBody<{}>;