export type Rooms = Room[];

export type RoomsApi = RoomApi[];

export type Room = {
  text: string;
  id: number;
  color: string;
};

export type RoomHydraApi = {
  '@id': string;
  '@context': string;
  '@type':string;
  'hydra:member': RoomsApi;
  'hydra:totalitems': number;
  
};

export type RoomApi = {
  '@id': number;
  '@type': string;
  id: number;
  descrizione: string;
};
