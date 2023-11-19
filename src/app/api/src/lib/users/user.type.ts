import { RowClickEvent } from "devextreme/ui/tree_list";

export type Users = User[];

export type UsersApi = UserApi[];

export type User = {
  id: number;
  username: string;
  email: number;
  nome: string;
  roles: string[];
  isVerified: boolean;
  isDisabled: boolean ;
};

export type UserHydraApi = {
  '@id': string;
  '@context': string;
  '@type':string;
  'hydra:member': UsersApi;
  'hydra:totalitems': number;
  
};

export type UserApi = {
  '@id': number;
  '@type': string;
  id: number;
  username: string;
  email: number;
  nome: string;
  roles: string[];
  isVerified: true;
  isDisabled: false;
};



