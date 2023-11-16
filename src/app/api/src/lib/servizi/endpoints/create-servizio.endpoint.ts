import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// Create di una stanza
export const createServizioEndpoint = () => "servizio";

export type CreateServizioSuccessResponse = ApiSuccessResponse<{}>;

export type CreateServizioFailureResponse = ApiFailureResponse<{}>;

export type CreateServizioBody = ApiBody<{}>;