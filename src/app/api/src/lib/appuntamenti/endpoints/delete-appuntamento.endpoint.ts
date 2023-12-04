import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';

// delete di un singolo appuntamento
export const deleteAppuntamentoEndpoint = (id:number) => `appuntamento/${id}`;

export type DeleteAppuntamentoSuccessResponse = ApiSuccessResponse<{}>;

export type DeleteAppuntamentoFailureResponse = ApiFailureResponse<{}>;