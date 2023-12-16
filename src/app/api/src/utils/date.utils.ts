export function dateTime2StringFormat1(utcDate: Date): string {
    return utcDate.getFullYear() + "-" +
          (utcDate.getMonth() + 1).toString().padStart(2, '0') +    "-" +
           utcDate.getDate().toString().padStart(2, '0') + " " +
           utcDate.getHours().toString().padStart(2, '0') + ":" +
           utcDate.getMinutes().toString().padStart(2, '0');}

export function dateTime2StringFormat2(utcDate: Date): string {
    return utcDate.getFullYear() + "-" +
          (utcDate.getMonth() + 1).toString().padStart(2, '0') +    "-" +
           utcDate.getDate().toString().padStart(2, '0');}