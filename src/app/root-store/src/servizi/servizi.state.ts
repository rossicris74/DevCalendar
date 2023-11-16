import * as ServiziosType from '../../../api/src/lib/servizi/servizio.type';
export interface State {
  serviziList:ServiziosType.Servizi;
}

export const initialState: State = {
  serviziList:[] 
};
