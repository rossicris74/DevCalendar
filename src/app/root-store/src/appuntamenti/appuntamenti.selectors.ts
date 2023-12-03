import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './appuntamenti.state';
import { AppuntamentiFeatureKey } from './appuntamenti.reducers';
import { AppuntamentiType } from 'src/app/api/src/lib/appuntamenti/public-api';


const getAllAppuntamentiState = (state: State) => state.appuntamenti;
export const getAppuntamentiState = createFeatureSelector<State>(AppuntamentiFeatureKey);

/** Ritorna l'elenco degli appuntamenti*/
export const getAllAppuntamenti = createSelector(getAppuntamentiState, getAllAppuntamentiState);

export const getApp4Scheduler = createSelector( getAppuntamentiState,getAllAppuntamenti, (_, appuntamenti)  => {
    let apps4scheduler: AppuntamentiType.Apps4Scheduler = [];
    if (appuntamenti?.length > 0){
        appuntamenti.forEach(appuntamento => {
            const app4Sched : AppuntamentiType.App4Scheduler = {id: appuntamento.id,
                text: appuntamento.text,
                userId: appuntamento.utente_id,
                roomId: appuntamento.roomId,
                cliId: appuntamento.cliId,
                servId: appuntamento.servId,
                startDate: appuntamento.startDate,
                endDate: appuntamento.endDate,
                note: appuntamento.note}
            apps4scheduler.push(app4Sched);}
        )
    }
return apps4scheduler;
})