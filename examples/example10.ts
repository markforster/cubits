import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection, Vertex } from '../src/cube/lib';
import { colourForIndex } from '../src/lib/colourForIndex';
import { COLOURS } from '../src/lib/colours';
import { newCubeState } from '../src/lib/factory';
import { indecesForNormal } from '../src/lib/indecesForNormal';
import { layerNormalForColour } from '../src/lib/layerVertexForColour';

const logColoursForColourToConsole = (
  cubeState: CubeState,
  colour: COLOURS,
) => {
  const lnfc: Vertex = layerNormalForColour(cubeState, colour);
  const indices: any[] = indecesForNormal(cubeState, lnfc);
  const colours: any[] = indices.map((i: number) => colourForIndex(i));

  console.log(
    `Colours for ${COLOURS[colour]}`,
    colours.map((c: COLOURS) => COLOURS[c]),
  );
};

const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);

logColoursForColourToConsole(cubeState, COLOURS.BLUE);

cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);

logColoursForColourToConsole(cubeState, COLOURS.BLUE);
