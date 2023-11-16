import { CubeState } from "../../cube";
import { Vertex } from "../../cube/lib";
import { colourForIndex } from "../colourForIndex";
import { COLOURS } from "../colours";
import { indecesForNormal } from "../indecesForNormal";
import { layerNormalForColour } from "../layerVertexForColour";

export const expectColourToHaveNormal = (
  cubeState: CubeState,
  colour: COLOURS,
  normal: Vertex,
): void => {
  const lnfc = layerNormalForColour(cubeState, colour);
  const indeces: any[] = indecesForNormal(cubeState, lnfc);
  const ifn = indecesForNormal(cubeState, normal);

  expect(COLOURS[colourForIndex(ifn[4])]).toBe(
    COLOURS[colourForIndex(indeces[4])],
  );
};