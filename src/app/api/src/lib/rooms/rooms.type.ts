export type Rooms = Room[];

export type RoomsApi = RoomApi[];

export type Room = {
  id: number;
  descrizione: string;
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

export type ListRooms4Group = Room4Group[];

export type Room4Group = {
  id: number;
  text: string;
}
