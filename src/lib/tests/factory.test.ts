import { buildCubeVectors, flattenCubeState } from '../factory';
import { CubeState } from '../../cube';
import { Vertex, Vector } from '../../cube/lib';

describe('factory utilities', () => {
  const generateExpectedState = (): CubeState => {
    const state: Vector[] = [];
    const faces = [
      { axis: 1, value: 1, outer: 2, inner: 0, values: [-1, 0, 1] }, // top
      { axis: 1, value: -1, outer: 2, inner: 0, values: [-1, 0, 1] }, // bottom
      { axis: 2, value: -1, outer: 1, inner: 0, values: [1, 0, -1] }, // front
      { axis: 2, value: 1, outer: 1, inner: 0, values: [1, 0, -1] }, // back
      { axis: 0, value: -1, outer: 1, inner: 2, values: [1, 0, -1] }, // left
      { axis: 0, value: 1, outer: 1, inner: 2, values: [1, 0, -1] }, // right
    ];
    const innerValues = [-1, 0, 1];
    for (const cfg of faces) {
      for (const o of cfg.values) {
        for (const i of innerValues) {
          const pos: Vertex = [0, 0, 0];
          pos[cfg.axis] = cfg.value;
          pos[cfg.outer] = o;
          pos[cfg.inner] = i;
          const orient: Vertex = [...pos];
          orient[cfg.axis] = cfg.value * 2;
          state.push([pos, orient]);
        }
      }
    }
    return state as CubeState;
  };

  it('buildCubeVectors should create the correct cube state layout', () => {
    const expected = generateExpectedState();
    const result = buildCubeVectors();
    expect(result).toEqual(expected);
  });

  it('flattenCubeState should flatten the cube state to a numeric array', () => {
    const state = buildCubeVectors();
    const expectedFlat = generateExpectedState().flat().flat();
    const flattened = flattenCubeState(state);
    expect(flattened).toEqual(expectedFlat);
    expect(flattened.length).toBe(54 * 6);
  });
});
