import { Vertex } from '../../cube/lib';
import { crossProduct } from '../crossProduct';

const test_data: [Vertex, Vertex, Vertex][] = [
  [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
  [[0, 0, 0], [0, -1, 0], [0, 0, -0]],

  [[-1, 0, 0], [0, 1, 0], [0, 0, -1]],
  [[1, 0, 0], [0, 1, 0], [0, 0, 1]],

  [[-1, 0, 0], [0, -1, 0], [0, 0, 1]],
  [[1, 0, 0], [0, -1, 0], [0, 0, -1]],

  [[1, 0, 0], [0, 0, -1], [-0, 1, 0]],
  [[1, 0, 0], [0, 0, 1], [0, -1, 0]],

  [[-1, 0, 0], [0, 0, -1], [ -0, -1, -0 ]],
  [[-1, 0, 0], [0, 0, 1], [ 0, 1, -0 ]],

  [[0, 1, 0], [0, 0, -1], [ -1, 0, 0 ]],
  [[0, 1, 0], [0, 0, 1], [ 1, 0, 0 ]],

  [[0, -1, 0], [0, 0, -1], [ 1, 0, 0 ]],
  [[0, -1, 0], [0, 0, 1], [ -1, 0, 0 ]],
];

describe('Calculating the cross product between 2 vertices', () => {
  test_data.forEach((td) => {
    it(`Should return ${td[2]} given the Vertex ${td[0]} and Vertex ${td[1]}`, () => {
      expect(crossProduct(td[0], td[1])).toEqual(td[2]);
    });
  });
});
