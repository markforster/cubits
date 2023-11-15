import { PrimaryUnit } from '..';
import { Vertex } from '../../cube/lib';
import { primaryUnit } from '../primaryUnit';

describe('primaryUnit function', () => {
  it('should find the primary unit and its index when the Vertex contains non-zero elements', () => {
    const vertex1: Vertex = [0, 2, 0];
    const result1: PrimaryUnit = primaryUnit(vertex1);
    expect(result1).toEqual([1, 2]);
  });

  it('should return [null, undefined] when the Vertex contains all zeros', () => {
    const vertex2: Vertex = [0, 0, 0];
    const result2: PrimaryUnit = primaryUnit(vertex2);
    expect(result2).toEqual([null, undefined]);
  });

  it('should correctly handle negative and positive values', () => {
    const vertex3: Vertex = [-1, 0, 5];
    const result3: PrimaryUnit = primaryUnit(vertex3);
    expect(result3).toEqual([0, -1]);

    const vertex4: Vertex = [0, -3, 7];
    const result4: PrimaryUnit = primaryUnit(vertex4);
    expect(result4).toEqual([1, -3]);
  });

  it('should correctly handle decimal values', () => {
    const vertex5: Vertex = [0, 0.5, 0];
    const result5: PrimaryUnit = primaryUnit(vertex5);
    expect(result5).toEqual([1, 0.5]);
  });

  // Add more test cases to cover different scenarios.
});
