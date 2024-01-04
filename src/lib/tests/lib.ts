/* istanbul ignore file */
import { compareArray, indicesForNormal } from '..';
import { newCubeState } from '../..';
import { CubeState } from '../../cube';
import { Vertex } from '../../cube/lib';
import { colourForIndex } from '../colourForIndex';
import { COLOURS } from '../colours';
import { layerNormalForColour } from '../layerVertexForColour';

export const expectDefaultCubeState = (cubeState: CubeState) => {
  const tmpCubeState: CubeState = newCubeState();

  tmpCubeState.forEach((_cs: any, index: number) => {
    expect(compareArray(cubeState[index][0], tmpCubeState[index][0])).toBe(
      true,
    );
  });
};

export const expectColourToHaveNormal = (
  cubeState: CubeState,
  colour: COLOURS,
  normal: Vertex,
): void => {
  const lnfc = layerNormalForColour(cubeState, colour);
  const indeces: any[] = indicesForNormal(cubeState, lnfc);
  const ifn = indicesForNormal(cubeState, normal);

  expect(COLOURS[colourForIndex(ifn[4])]).toBe(
    COLOURS[colourForIndex(indeces[4])],
  );
};
