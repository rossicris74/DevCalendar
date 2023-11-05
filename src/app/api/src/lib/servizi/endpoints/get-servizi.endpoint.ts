import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import * as ServiziType from '../servizio.type';

// Richiamo tutti i servizi
export const getAllServiziEndpoint = () => `servizios`;

export type GetAllServiziSuccessResponse = ApiSuccessResponse<ServiziType.ServizioHydraApi>;

export type GetAllServiziFailureResponse = ApiFailureResponse<{}>;
