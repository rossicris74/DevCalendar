import { createAction, props } from '@ngrx/store';
export const setTest = createAction(
  '[Test ] set id and desr',
  props<{ id:number, descr: string }>(),
);