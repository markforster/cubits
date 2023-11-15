/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { COLOURS } from '../src/lib/colours';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Rotating Orange side clockwise once', (cube: ICube) => {
  showCubeDetails(cube, 'Starting Cube');

  cube.rotateLayerForColour(COLOURS.ORANGE, CubeRotationDirection.ClockWise);

  showCubeDetails(
    cube,
    'Cube rotation: <Side Orange (Left), Direction ClockWise>',
  );
});
