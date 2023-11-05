import * as ClientiType from '../clienti.type';
export function fromApiToClient(clientiHydraApi: ClientiType.ClienteHydraApi) :ClientiType.Clienti{
    const clientiApi: ClientiType.ClientiApi = clientiHydraApi['hydra:member'];
    const clienti: ClientiType.Clienti = [];
    clientiApi.forEach(clienteApi => {
        const cliente: ClientiType.Cliente  = {
            id: clienteApi.id,
            nome: clienteApi.nome,
            codiceFiscale: clienteApi.codice_fiscale,
            dataNascita: clienteApi.data_nascita,
            email: clienteApi.email,
            isOnlineReady: clienteApi.isOnlineReady,
            cognome: clienteApi.cognome,
            dataInserimento: clienteApi.data_inserimento,
            dataUltimoAggiornamento: clienteApi.data_ultimo_aggiornamento
            
        };
        clienti.push(cliente);
    });
    return clienti;
}