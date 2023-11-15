/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { COLOURS } from '../src/lib/colours';
import { AxisVertex } from './../src/lib/';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Rotate Cube pitch and yellow layer', (cube: ICube) => {
  showCubeDetails(cube, 'Starting Cube');

  cube.rotate(AxisVertex.PITCH, CubeRotationDirection.ClockWise);
  cube.rotateLayerForColour(COLOURS.YELLOW, CubeRotationDirection.ClockWise);

  showCubeDetails(cube, 'Cube rotation: <Pitch ClockWise, Yellow ClockWise>');
});
