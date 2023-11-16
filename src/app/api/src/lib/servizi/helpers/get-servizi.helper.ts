import * as ServiziType from '../servizio.type';
export function fromApiToClient(serviziHydraApi: ServiziType.ServizioHydraApi) :ServiziType.Servizi{
    const serviziApi: ServiziType.ServiziApi = serviziHydraApi['hydra:member'];
    const servizi: ServiziType.Servizi = [];
    serviziApi.forEach(servizioApi => {
        const servizio: ServiziType.Servizio  = {
            id: servizioApi.id,
            descrizione: servizioApi.descrizione,
            durata: servizioApi.durata,
            colore: servizioApi.colore
        };
        servizi.push(servizio);
    });
    return servizi;
}