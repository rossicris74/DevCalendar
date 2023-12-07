import { deepCopy } from 'src/app/utils/deep-copy';
import * as AppuntamentiType from '../appuntamenti.type';
export function fromApiHydraToClient(appuntamentoHydraApi: AppuntamentiType.AppuntamentoHydraApi) :AppuntamentiType.Appuntamenti{
    const appuntamentiApi: AppuntamentiType.AppuntamentiApi = appuntamentoHydraApi['hydra:member'];
    const appuntamenti: AppuntamentiType.Appuntamenti = fromApiToClient(appuntamentiApi);
    return appuntamenti;
}

 export function fromApiToClient(appuntamentiApi: AppuntamentiType.AppuntamentiApi): AppuntamentiType.Appuntamenti {
    const appuntamenti : AppuntamentiType.Appuntamenti = [];
    appuntamentiApi.forEach(appuntamentoApi => {
        appuntamenti.push(fromApiToClientOne(appuntamentoApi));});
        return appuntamenti;
 }

 export function fromClientToApi(app4Scheduler: AppuntamentiType.App4Scheduler): AppuntamentiType.AppUpdApi{
   let utcDate: Date = deepCopy(app4Scheduler.startDate);
   utcDate.setMinutes(utcDate.getMinutes() + utcDate.getTimezoneOffset());
   const appUpdApi: AppuntamentiType.AppUpdApi = {
        cliente: app4Scheduler.cliId,
        stanza: app4Scheduler.roomId,
        data_appuntamento:  utcDate.getFullYear() + "-" +
                           (utcDate.getMonth() + 1).toString().padStart(2, '0') +    "-" +
                            utcDate.getDate().toString().padStart(2, '0') + " " +
                            utcDate.getHours().toString().padStart(2, '0') + ":" +
                            utcDate.getMinutes().toString().padStart(2, '0'),
        note: app4Scheduler.note ? app4Scheduler.note : "",
        servizio: app4Scheduler.servId,
        user: app4Scheduler.userId
}
 return appUpdApi;
}

export function fromApiToClientOne(appuntamentoApi: AppuntamentiType.AppuntamentoApi) :AppuntamentiType.Appuntamento{
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
    endDate:  getEndDate(new Date(appuntamentoApi.data_appuntamento.replace(':00.00','.000')), appuntamentoApi.servizio.durata)
    // Campi per esposizione su DevCalendar - Fine
};
return appuntamento;
}

export function fromApiToClientInsUpd(appuntamentoApi: AppuntamentiType.AppuntamentoInsUpdApi) :AppuntamentiType.Appuntamento{
    const appuntamento: AppuntamentiType.Appuntamento  = {
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
        isDisabled: appuntamentoApi.user.isDisabled,
        // Campi per esposizione su DevCalendar - Inizio
        text:       appuntamentoApi.note,
        priorityId: appuntamentoApi.stanza.id,
        utente_id:  appuntamentoApi.user.id,
        color:      appuntamentoApi.servizio.colore,
        startDate:  new Date(appuntamentoApi.data_appuntamento),
        endDate:  getEndDate(new Date(appuntamentoApi.data_appuntamento.replace(':00.00','.000')), appuntamentoApi.servizio.durata)
        // Campi per esposizione su DevCalendar - Fine
    };
    return appuntamento;
    }

export function getEndDate(dataApp: Date, minutes: number): Date {
    const result = new Date(dataApp);
    result.setMinutes(result.getMinutes() + minutes);
    return result;}
