export const StringIsNumber = (value: any) => isNaN(Number(value)) === false;
export const NotStringIsNumber = (value: any) => isNaN(Number(value)) === true;

// Turn enum into array
export function KeysForEnum(_enum: any): any[] {
  return Object.keys(_enum)
    .filter(StringIsNumber)
    .map((key) => _enum[key]);
}

export function ValuesForEnum(_enum: any): any[] {
  return Object.keys(_enum)
    .filter(NotStringIsNumber)
    .map((key) => _enum[key]);
}