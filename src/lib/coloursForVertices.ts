import { Vector, Vertex } from '../cube/lib';
import { CubeState } from '../cube/state';
import { colourForIndex } from './colourForIndex';
import { COLOURS } from './colours';
import { arrayEquals } from './arrayEquals';

// TODO: Need to test coloursForVertices
export function coloursForVertices(
  vertices: Vertex[],
  cubestate: CubeState,
): COLOURS[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const indices: number[] = vertices.map((v: Vertex, ii: number) => {
    const found: Vector = cubestate.find((value: Vector) => {
      return arrayEquals(value[1], v);
    });
    const index: number = cubestate.indexOf(found);
    return index !== -1 ? colourForIndex(index) : undefined;
  });

  return indices;
}
