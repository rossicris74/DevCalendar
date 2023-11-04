/**
 * Funzione per effettuare una deep copy del parametro. Ritorna una copia del parametro
 * Esempio di utilizzo fuori da api:
 *
 * @example import { Copy } from '@bilancio/api';
 * const objCopy = Copy.deepCopy(obj);
 * @param obj: tipo T (generico)
 * @returns copia di obj dello stesso tipo
 */
export const deepCopy = <T>(obj: T): T => structuredClone(obj);