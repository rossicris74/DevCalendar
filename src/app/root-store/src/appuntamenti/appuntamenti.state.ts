import * as AppuntamentiType from '../../../api/src/lib/appuntamenti/appuntamenti.type';
export interface State {
  appuntamenti:AppuntamentiType.Appuntamenti;
}

export const initialState: State = {
  appuntamenti:[] 
};
