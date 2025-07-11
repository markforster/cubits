import { rotate3DPoint, rotate3DPoints, FULL_ROTATION } from '../rotation';
import { Vertex } from '../../cube/lib';
import { toRadians } from '../toRadians';

describe('rotate3DPoint', () => {
  it('rotates a point around the z axis by 90 degrees', () => {
    const point: Vertex = [1, 0, 0];
    const axis: Vertex = [0, 0, 1];
    const angle = toRadians(FULL_ROTATION);
    const result = rotate3DPoint(point, axis, angle);
    expect(result[0]).toBeCloseTo(0, 10);
    expect(result[1]).toBeCloseTo(1, 10);
    expect(result[2]).toBeCloseTo(0, 10);
  });

  it('rotates a point around the x axis by 180 degrees', () => {
    const point: Vertex = [0, 1, 0];
    const axis: Vertex = [1, 0, 0];
    const angle = toRadians(FULL_ROTATION * 2);
    const result = rotate3DPoint(point, axis, angle);
    expect(result[0]).toBeCloseTo(0, 10);
    expect(result[1]).toBeCloseTo(-1, 10);
    expect(result[2]).toBeCloseTo(0, 10);
  });
});

describe('rotate3DPoints', () => {
  it('rotates multiple points around the z axis by 90 degrees', () => {
    const points: Vertex[] = [
      [1, 0, 0],
      [0, 1, 0],
    ];
    const axis: Vertex = [0, 0, 1];
    const angle = toRadians(FULL_ROTATION);
    const result = rotate3DPoints(points, axis, angle);
    expect(result).toEqual([
      [0, 1, 0],
      [-1, 0, 0],
    ]);
  });

  it('applies rounding when rotating points', () => {
    const points: Vertex[] = [[1, 1, 1]];
    const axis: Vertex = [0, 1, 0];
    const angle = toRadians(FULL_ROTATION / 2);
    const result = rotate3DPoints(points, axis, angle);
    expect(result[0]).toEqual([1, 1, 0]);
  });
});
