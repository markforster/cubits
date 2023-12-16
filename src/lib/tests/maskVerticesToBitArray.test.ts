import { maskVerticesToBitArray } from '../maskVerticesToBitArray';

describe('Masking vertices to a bit array', () => {
  it('Should mask [0, 0, 0] to 0b0', () => {
    expect(maskVerticesToBitArray([0, 0, 0])).toBe(0b0);
  });

  it('Should mask [0, 0, 1] to 0b1', () => {
    expect(maskVerticesToBitArray([0, 0, 1])).toBe(0b1);
  });

  it('Should mask [0, 1, 0] to 0x02', () => {
    expect(maskVerticesToBitArray([0, 1, 0])).toBe(0b10);
  });

  it('Should mask [0, 1, 1] to 0b11', () => {
    expect(maskVerticesToBitArray([0, 1, 1])).toBe(0b11);
  });

  it('Should mask [1, 0, 0] to 0b100', () => {
    expect(maskVerticesToBitArray([1, 0, 0])).toBe(0b100);
  });

  it('Should mask [1, 0, 1] to 0b101', () => {
    expect(maskVerticesToBitArray([1, 0, 1])).toBe(0b101);
  });

  it('Should mask [1, 1, 0] to 0b110', () => {
    expect(maskVerticesToBitArray([1, 1, 0])).toBe(0b110);
  });

  it('Should mask [1, 1, 1] to 0b111', () => {
    expect(maskVerticesToBitArray([1, 1, 1])).toBe(0b111);
  });
});
