/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { Axis } from '../src/lib/rotate';
import { COLOURS } from '../src/lib/colours';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Rotate Cube pitch and yellow layer', (cube: ICube) => {
  showCubeDetails(cube, 'Starting Cube');

  cube.rotate(Axis.X, CubeRotationDirection.ClockWise);
  cube.rotateLayerForColour(COLOURS.YELLOW, CubeRotationDirection.ClockWise);

  showCubeDetails(cube, 'Cube rotation: <Pitch ClockWise, Yellow ClockWise>');
});
