import { Vertex } from '../../cube/lib';
import { countNonZeroElements } from '../countNonZeroElements';

describe('countNonZeroElements function', () => {
  it('should return 0 for an array containing all zeros', () => {
    const vertex: Vertex = [0, 0, 0];
    const count = countNonZeroElements(vertex);
    expect(count).toBe(0);
  });

  it('should return the correct count for an array with non-zero elements', () => {
    const vertex: Vertex = [0, 0, 1];
    const count = countNonZeroElements(vertex);
    expect(count).toBe(1);
  });

  it('should return the correct count for an array with non-zero elements', () => {
    const vertex: Vertex = [0, 1, 2];
    const count = countNonZeroElements(vertex);
    expect(count).toBe(2);
  });

  it('should return the correct count for an array with non-zero elements', () => {
    const vertex: Vertex = [1, 2, 3];
    const count = countNonZeroElements(vertex);
    expect(count).toBe(3);
  });

  it('should throw an error for a non-array input', () => {
    const invalidInputs: any[] = [
      null,
      undefined,
      'not an array',
      123,
      { key: 'value' },
    ];

    invalidInputs.forEach((input) => {
      expect(() => countNonZeroElements(input)).toThrowError(
        'Invalid input. The input must be an array of numbers.',
      );
    });
  });
});
