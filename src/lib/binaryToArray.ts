export function binaryToArray(
  binaryNumber: number,
  maxLength: number = 3,
): number[] {
  return binaryNumber
    .toString(2)
    .padStart(maxLength, '0') // Pad the binary string with leading zeros
    .split('')
    .map(Number);
}
