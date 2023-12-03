export type Servizi = Servizio[];

export type ServiziApi = ServizioApi[];

export type Servizio = {
  id: number;
  descrizione: string;
  durata: number;
  colore: string
};

export type ServizioHydraApi = {
  '@id': string;
  '@context': string;
  '@type':string;
  'hydra:member': ServiziApi;
  'hydra:totalitems': number;
  
};

export type ServizioApi = {
  '@id': number;
  '@type': string;
  id: number;
  descrizione: string;
  durata: number;
  colore: string
};

export type ListServizi4Group = Servizio4Group[];

export type Servizio4Group = {
  id: number;
  text: string;
  color: string;
  durata: number;
}

