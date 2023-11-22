// /* istanbul ignore file */

import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { COLOURS } from '../src/lib/colours';
import { newCubeState } from '../src/lib/factory';
import { cubeExample, showCubeDetails } from './lib';

const cubeState: CubeState = newCubeState();
const _cube: ICube = new Cube(cubeState);

cubeExample(
  'Working with cube faces',
  (cube: ICube) => {
    console.log('same', _cube === cube);
    showCubeDetails(cube, 'Starting Cube');

    cube.rotateLayerForColour(COLOURS.RED, CubeRotationDirection.ClockWise);

    showCubeDetails(
      cube,
      'Cube rotation: <Side Red (Right), Direction ClockWise>',
    );
  },
  _cube,
);
