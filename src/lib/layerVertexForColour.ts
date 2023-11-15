import { CubeState } from '../cube';
import { Vertex } from '../cube/lib';
import { COLOURS } from './colours';
import { MARKERS } from './markers';

export const layerVertexForColour = (
  cubeState: CubeState,
  colour: COLOURS,
): Vertex => {
  const marker: number = MARKERS[colour];
  // The vertex will be of type LayersVertex
  // FOr example by default top will be white and white will be LayersVertex.TOP
  return cubeState[marker][0];
};

export const layerNormalForColour = (
  cubeState: CubeState,
  colour: COLOURS,
): Vertex => {
  const marker: number = MARKERS[colour];
  // The vertex will be of type LayersVertex
  // FOr example by default top will be white and white will be LayersVertex.TOP
  return cubeState[marker][1];
};
