import { Cliente} from "../clienti/clienti.type";
import { Room} from "../rooms/rooms.type";
import { Servizio } from "../servizi/servizio.type";
import { User } from "../users/user.type";

export type Appuntamenti = Appuntamento[];

export type AppuntamentiApi = AppuntamentoApi[];

export type Apps4Scheduler = App4Scheduler[];

export type Appuntamento = {
  id: number;
  dataApp:string;
  note: string;
  cliId: number;
  cliCognome: string;
  cliNome: string;
  cliCodFisc: string;
  cliDataNas: string;
  cliEmail: string;
  roomId: number;
  roomDesc: string;
  servId: number;
  servDesc: string;
  servDurata: number;
  servColore: string;
  userId: number;
  userUserName: string;
  userEmail: number;
  UserNome: string;
  isDisabled: boolean;
  text: string,
  priorityId: number,
  utente_id: number,
  color: string,
  startDate: Date,
  endDate: Date
}

export type AppuntamentoHydraApi = {
  '@id': string;
  '@context': string;
  '@type':string;
  'hydra:member': AppuntamentiApi;
  'hydra:totalitems': number;
  
};

export type AppuntamentoApi = {
  '@id': number;
  '@type': string;
  id: number;
  data_appuntamento: string;
  note: string;
  clienti: Cliente;
  stanza: Room;
  servizio: Servizio;
  user: User;
};

export type AppuntamentoInsUpdApi = {
  id: number;
  data_appuntamento: string;
  note: string;
  cliente: Cliente;
  stanza: Room;
  servizio: Servizio;
  user: User;
};

export type App4Scheduler = {
  id: number;
  text: string,
  userId: number,
  roomId: number,
  cliId: number,
  servId: number,
  startDate: Date,
  endDate: Date,
  note: string,
}

export type AppUpdApi =
  {
    "cliente": number,
    "stanza": number,
    "data_appuntamento": string,
    "note": string,
    "servizio": number,
    "user": number,
  }