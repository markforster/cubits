import { vectorMagnitude } from '../vectorMagnitude';

describe('Calculating the magnitude of a vector', () => {
  it('calculates magnitude for a positive vector', () => {
    const result = vectorMagnitude([3, 4, 5]);
    expect(result).toBeCloseTo(7.071, 3); // Close enough to the expected value
  });

  it('calculates magnitude for a negative vector', () => {
    const result = vectorMagnitude([-2, -3, -6]);
    expect(result).toBeCloseTo(7, 3); // Close enough to the expected value
  });

  it('calculates magnitude for a vector with zeros', () => {
    const result = vectorMagnitude([0, 0, 0]);
    expect(result).toBe(0); // Magnitude of the zero vector is always 0
  });

  it('calculates magnitude for a vector with negative zeros', () => {
    const result = vectorMagnitude([-0, -0, -0]);
    expect(result).toBe(0); // Magnitude of the zero vector is always 0
  });

  it('calculates magnitude for a vector with negative components', () => {
    const result = vectorMagnitude([-3, 4, -5]);
    expect(result).toBeCloseTo(7.071, 3); // Close enough to the expected value
  });

  it('calculates magnitude for a vector with decimal components', () => {
    const result = vectorMagnitude([1.5, 2.5, 3.5]);
    expect(result).toBeCloseTo(4.555, 3); // Close enough to the expected value
  });

  it('calculates magnitude for a large vector', () => {
    const result = vectorMagnitude([1e6, 2e6, 3e6]);
    expect(result).toBeCloseTo(3741657.3867739416, 3); // Close enough to the expected value
  });

  it('calculates magnitude for a small vector', () => {
    const result = vectorMagnitude([1e-6, 2e-6, 3e-6]);
    expect(result).toBeCloseTo(0.0000037416573867739415, 12); // Close enough to the expected value
  });

  it('calculates magnitude for a vector with duplicate components', () => {
    const result = vectorMagnitude([2, 2, 2]);
    expect(result).toBeCloseTo(3.464, 3); // Close enough to the expected value
  });
});
