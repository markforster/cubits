import { CubeState } from '../../cube';
import { areAllValuesSame } from '../array/areAllValuesSame';
import { colourForIndex } from '../colourForIndex';
import { COLOURS } from '../colours';
import { indicesForNormal } from '../indicesForNormal';
import { layerNormalForColour } from '../layerVertexForColour';

export const solved = (cubeState: CubeState, colour?: COLOURS): boolean => {
  return (
    (colour !== undefined
      ? [colour]
      : [
          COLOURS.WHITE,
          COLOURS.YELLOW,
          COLOURS.GREEN,
          COLOURS.BLUE,
          COLOURS.ORANGE,
          COLOURS.RED,
        ]
    )
      .map((c: COLOURS) => {
        const lnfc = layerNormalForColour(cubeState, c);

        const indices: any[] = indicesForNormal(cubeState, lnfc);

        const colours: any[] = indices.map((i: number) => {
          return colourForIndex(i);
        });

        return areAllValuesSame(colours);
      })
      .filter((m) => m === false).length === 0
  );
};
