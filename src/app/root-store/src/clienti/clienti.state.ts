import * as ClientiType from '../../../api/src/lib/clienti/clienti.type';
export interface State {
  clientiList:ClientiType.Clienti
}

export const initialState: State = {
  clientiList:[] 
};
