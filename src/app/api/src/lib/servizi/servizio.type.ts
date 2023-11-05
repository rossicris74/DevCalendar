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
