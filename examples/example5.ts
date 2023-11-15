/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { COLOURS } from '../src/lib/colours';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Rotating WHITE side 4 times clockwise', (cube: ICube) => {
  showCubeDetails(cube, 'Starting Cube');

  cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);

  showCubeDetails(
    cube,
    'Cube rotation: <Side White (Top), Direction ClockWise>',
  );

  cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);

  showCubeDetails(
    cube,
    'Cube rotation: <Side White (Top), Direction ClockWise>',
  );

  cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);

  showCubeDetails(
    cube,
    'Cube rotation: <Side White (Top), Direction ClockWise>',
  );

  cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);

  showCubeDetails(
    cube,
    'Cube rotation: <Side White (Top), Direction ClockWise>',
  );
});
