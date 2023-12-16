import { Vertex } from '../../cube/lib';
import { dotProduct } from '../dotProduct';

const test_data: [Vertex, Vertex, number][] = [
  [[0, 0, 0], [0, 2, 0], 0],
  [[2, -1, 4], [1, 5, -3], -15],
  [[-4, 3, 0], [5, 2, -2], -14],
  [[0, 3, -4], [1, 2, -5], 26],
  [[-5, 4, 1], [-2, -5, 5], -5],
  [[-2, -1, 2], [3, -5, 4], 7],
  [[3, 0, -2], [-1, -5, -1], -1],
  [[-3, 1, -5], [4, -1, -4], 7],
  [[-3, -1, -5], [-4, -1, 0], 13],
  [[5, 0, 1], [0, -2, 3], 3],
  [[2, -3, -5], [-1, -4, 5], -15],
];

describe('Calculating the dot product between 2 vectors each represented by a 3D Vertex', () => {
  test_data.forEach((td) => {
    it(`Should return ${td[2]} given the Vertex ${td[0]} and Vertex ${td[1]}`, () => {
      expect(dotProduct(td[0], td[1])).toBe(td[2]);
    });
  });
});
