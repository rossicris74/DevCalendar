import * as RoomsType from '../rooms.type';
export function fromApiToClient(roomsHydraApi: RoomsType.RoomHydraApi) :RoomsType.Rooms{
    const roomsApi: RoomsType.RoomsApi = roomsHydraApi['hydra:member'];
    const rooms: RoomsType.Rooms = [];
    roomsApi.forEach(roomApi => {
        const room: RoomsType.Room  = {
            id: roomApi.id,
            text: roomApi.descrizione,
            color: 'green'
        };
        rooms.push(room);
    });
    return rooms;
}