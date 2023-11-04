import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import * as ClientiType from '../clienti.type';

// Richiamo tutti i servizi
export const getAllClientiEndpoint = () => `clientes`;

export type GetAllClientiSuccessResponse = ApiSuccessResponse<ClientiType.ClienteHydraApi>;

export type GetAllClientiFailureResponse = ApiFailureResponse<{}>;
