export type Clienti = Cliente[];

export type ClientiApi = ClienteApi[];

export type Cliente = {
  id: number;
  nome: string;
  codiceFiscale: string;
  dataNascita: string;
  email: string;
  isOnlineReady: boolean;
  cognome: string;
  dataInserimento: string;
  dataUltimoAggiornamento: string
};

export type ClienteHydraApi = {
  '@id': string;
  '@context': string;
  '@type':string;
  'hydra:member': ClientiApi;
  'hydra:totalitems': number;
  
};

export type ClienteApi = {
  '@id': number;
  '@type': string;
  id: number;
  nome: string;
  codice_fiscale: string;
  data_nascita: string;
  email: string;
  isOnlineReady: boolean;
  cognome: string;
  data_inserimento: string;
  data_ultimo_aggiornamento: string
};

export type ListClienti4Group = Cliente4Group[];

export type Cliente4Group = {
  id: number;
  text: string;
  nome: string;
  cognome: string;
  email: string;
}
