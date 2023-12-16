import * as ClientiType from '../clienti.type';
import * as DateUtils from '../../../utils/date.utils';
export function fromApiToClient(clientiHydraApi: ClientiType.ClienteHydraApi) :ClientiType.Clienti{
    const clientiApi: ClientiType.ClientiApi = clientiHydraApi['hydra:member'];
    const clienti: ClientiType.Clienti = [];
    clientiApi.forEach(clienteApi => {
        const cliente: ClientiType.Cliente  = {
            id: clienteApi.id,
            nome: clienteApi.nome ? clienteApi.nome : '',
            codiceFiscale: clienteApi.codice_fiscale,
            dataNascita: new Date(clienteApi.data_nascita),
            email: clienteApi.email,
            isOnlineReady: clienteApi.isOnlineReady,
            cognome: clienteApi.cognome ? clienteApi.cognome : '',
            dataInserimento: new Date(clienteApi.data_inserimento),
            dataUltimoAggiornamento: new Date(clienteApi.data_ultimo_aggiornamento),
            telefono: clienteApi.telefono ? clienteApi.telefono : ''
        };
        clienti.push(cliente);
    });
    return clienti;
}

export function fromClientToApi(cliente: ClientiType.Cliente): ClientiType.ClienteUpdApi{
    const clienteUpdApi: ClientiType.ClienteUpdApi = {
        nome: cliente.nome ? cliente.nome : '',
        codice_fiscale: cliente.codiceFiscale ? cliente.codiceFiscale: '',
        data_nascita: DateUtils.dateTime2StringFormat2(cliente.dataNascita),
        email: cliente.email ? cliente.email : '',
        isOnlineReady: 1,
        cognome: cliente.cognome ? cliente.cognome : '',
        data_inserimento: !cliente.dataInserimento ? DateUtils.dateTime2StringFormat1(new Date) : DateUtils.dateTime2StringFormat1(cliente.dataInserimento),
        data_ultimo_aggiornamento: DateUtils.dateTime2StringFormat1(new Date),
        telefono: cliente.telefono ? cliente.telefono : ''}
  return clienteUpdApi;
 }