import * as AppuntamentiType from '../appuntamenti.type';
export function fromApiToClient(appuntamentoHydraApi: AppuntamentiType.AppuntamentoHydraApi) :AppuntamentiType.Appuntamenti{
    const appuntamentiApi: AppuntamentiType.AppuntamentiApi = appuntamentoHydraApi['hydra:member'];
    const appuntamenti: AppuntamentiType.Appuntamenti = [];
    appuntamentiApi.forEach(appuntamentoApi => {
        const appuntamento: AppuntamentiType.Appuntamento  = {
            // Campi per esposizione su DevCalendar - Inizio
            text:       appuntamentoApi.note,
            priorityId: appuntamentoApi.stanza.id,
            utente_id:  appuntamentoApi.user.id,
            color:      appuntamentoApi.servizio.colore,
            startDate:  appuntamentoApi.stanza.id === 1 && 
                        appuntamentoApi.user.id === 1 ? new Date ("2021-04-19T08:00:00.000") : new Date("2021-04-22T16:30:00.000"),
            endDate:    
            
                        appuntamentoApi.stanza.id === 1 && 
                        appuntamentoApi.user.id === 1 ? new Date ("2021-04-19T09:00:00.000") : new Date("2021-04-22T18:30:00.000"),
            // Campi per esposizione su DevCalendar - Fine
            id: appuntamentoApi.id,
            dataApp: appuntamentoApi.data_appuntamento,
            note: appuntamentoApi.note,
            cliId: appuntamentoApi.cliente.id,
            cliCognome:  appuntamentoApi.cliente.cognome,
            cliNome: appuntamentoApi.cliente.nome,
            cliCodFisc: appuntamentoApi.cliente.codiceFiscale,
            cliDataNas: appuntamentoApi.cliente.dataNascita,
            cliEmail: appuntamentoApi.cliente.email,
            roomId: appuntamentoApi.stanza.id,
            roomDesc:  appuntamentoApi.stanza.descrizione,
            servId: appuntamentoApi.servizio.id,
            servDesc:  appuntamentoApi.servizio.descrizione,
            servDurata: appuntamentoApi.servizio.durata,
            servColore:  appuntamentoApi.servizio.colore,
            userId: appuntamentoApi.user.id,
            userUserName:  appuntamentoApi.user.username,
            userEmail: appuntamentoApi.user.email,
            UserNome:  appuntamentoApi.user.nome,
            isDisabled: appuntamentoApi.user.isDisabled
        };
        appuntamenti.push(appuntamento);
    });
    return appuntamenti;
}