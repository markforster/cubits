import { CubeState } from '../../cube';
import { areAllValuesSame } from '../array/areAllValuesSame';
import { colourForIndex } from '../colourForIndex';
import { COLOURS } from '../colours';
import { indecesForNormal } from '../indecesForNormal';
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

        const indeces: any[] = indecesForNormal(cubeState, lnfc);

        const colours: any[] = indeces.map((i: number) => {
          return colourForIndex(i);
        });

        return areAllValuesSame(colours);
      })
      .filter((m) => m === false).length === 0
  );
};
