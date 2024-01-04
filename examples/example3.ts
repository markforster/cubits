/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { Axis } from '../src/lib/rotate';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Rotating a cube via YAW', (cube: ICube) => {
  showCubeDetails(cube, 'Starting Cube');

  cube.rotate(Axis.Y, CubeRotationDirection.ClockWise);
  showCubeDetails(cube, 'Cube rotation: <Yaw ClockWise>');

  cube.rotate(Axis.Y, CubeRotationDirection.ClockWise);
  showCubeDetails(cube, 'Cube rotation: <Yaw ClockWise>');
});
