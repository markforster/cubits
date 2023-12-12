import { binaryToArray } from '../binaryToArray';

describe('Converting a binary number to an array of zeros and ones', () => {
  // test.todo('test converting a binary number to an array');

  it('It should turn the number 0b0    (0) into [0, 0, 0]', () => {
    expect(binaryToArray(0b0)).toEqual([0, 0, 0]);
  });

  it('It should turn the number 0b1    (1) into [0, 0, 1]', () => {
    expect(binaryToArray(0b1)).toEqual([0, 0, 1]);
  });

  it('It should turn the number 0b10   (2) into [0, 1, 0]', () => {
    expect(binaryToArray(0b10)).toEqual([0, 1, 0]);
  });

  it('It should turn the number 0b11   (3) into [0, 1, 1]', () => {
    expect(binaryToArray(0b11)).toEqual([0, 1, 1]);
  });

  it('It should turn the number 0b100  (4) into [1, 0, 0]', () => {
    expect(binaryToArray(0b100)).toEqual([1, 0, 0]);
  });

  it('It should turn the number 0b100  (5) into [1, 0, 1]', () => {
    expect(binaryToArray(0b101)).toEqual([1, 0, 1]);
  });

  it('It should turn the number 0b110  (6) into [1, 1, 0]', () => {
    expect(binaryToArray(0b110)).toEqual([1, 1, 0]);
  });

  it('It should turn the number 0b111  (7) into [1, 1, 1]', () => {
    expect(binaryToArray(0b111)).toEqual([1, 1, 1]);
  });

  it('It should turn the number 0b1000 (8) into [1, 0, 0, 0]', () => {
    expect(binaryToArray(0b1000)).toEqual([1, 0, 0, 0]);
  });

  it('It should turn the number 0b1000 (8) into [1, 0, 0, 0]', () => {
    expect(binaryToArray(0b1000, 4)).toEqual([1, 0, 0, 0]);
  });

  it('It should turn the number 0b1000 (8) into [1, 0, 0, 0]', () => {
    expect(binaryToArray(0b1000, 3)).toEqual([1, 0, 0, 0]);
  });

  it('It should turn the number 0b1    (1) into [0, 0, 0, 0, 1]', () => {
    expect(binaryToArray(1, 5)).toEqual([0, 0, 0, 0, 1]);
  });
});
