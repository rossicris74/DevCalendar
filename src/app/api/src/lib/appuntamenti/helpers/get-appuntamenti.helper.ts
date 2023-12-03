import * as AppuntamentiType from '../appuntamenti.type';
export function fromApiToClient(appuntamentoHydraApi: AppuntamentiType.AppuntamentoHydraApi) :AppuntamentiType.Appuntamenti{
    const appuntamentiApi: AppuntamentiType.AppuntamentiApi = appuntamentoHydraApi['hydra:member'];
    const appuntamenti: AppuntamentiType.Appuntamenti = [];
    appuntamentiApi.forEach(appuntamentoApi => {
        const appuntamento: AppuntamentiType.Appuntamento  = {
            id: appuntamentoApi.id,
            dataApp: appuntamentoApi.data_appuntamento,
            note: appuntamentoApi.note,
            cliId: appuntamentoApi.clienti.id,
            cliCognome:  appuntamentoApi.clienti.cognome,
            cliNome: appuntamentoApi.clienti.nome,
            cliCodFisc: appuntamentoApi.clienti.codiceFiscale,
            cliDataNas: appuntamentoApi.clienti.dataNascita,
            cliEmail: appuntamentoApi.clienti.email,
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
            isDisabled: appuntamentoApi.user.isDisabled,
            // Campi per esposizione su DevCalendar - Inizio
            text:       appuntamentoApi.note,
            priorityId: appuntamentoApi.stanza.id,
            utente_id:  appuntamentoApi.user.id,
            color:      appuntamentoApi.servizio.colore,
            startDate:  new Date(appuntamentoApi.data_appuntamento),
            // appuntamentoApi.stanza.id === 1 && 
            // appuntamentoApi.user.id === 1 ? new Date ("2021-04-19T08:00:00.000") : new Date("2021-04-22T16:30:00.000"),
            endDate:  getEndDate(new Date(appuntamentoApi.data_appuntamento.replace(':00.00','.000')), appuntamentoApi.servizio.durata)
            // appuntamentoApi.stanza.id === 1 && 
            // appuntamentoApi.user.id === 1 ? new Date ("2021-04-19T09:00:00.000") : new Date("2021-04-22T18:30:00.000"),
            // Campi per esposizione su DevCalendar - Fine
        };
        appuntamenti.push(appuntamento);
    });
    return appuntamenti;
}

export function getEndDate(dataApp: Date, minutes: number): Date {
    const result = new Date(dataApp);
    result.setMinutes(result.getMinutes() + minutes);
    return result;}