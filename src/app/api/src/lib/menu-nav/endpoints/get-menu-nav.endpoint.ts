import { ApiBody } from '../../api/responses/api-body.type';
import { ApiFailureResponse } from '../../api/responses/api-failure-response.type';
import { ApiSuccessResponse } from '../../api/responses/api-success-response.type';
import { MenuNavType } from '../public-api';

export const getMenuNavJsonDbEndpoint = () => `MenuNav`;
export const getMenuNavLocalEndpoint = () =>
  `/assets/mocks/menu-nav.mock.json`;

export type GetMenuNavSuccessResponse =
  ApiSuccessResponse<MenuNavType.MenuNav>;

export type GetMenuNavFailureResponse = ApiFailureResponse<{}>;

export type GetMenuNavBody = ApiBody<{}>;
