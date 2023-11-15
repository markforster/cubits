/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { AxisVertex } from './../src/lib/';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Rotating a cube via YAW', (cube: ICube) => {
  showCubeDetails(cube, 'Starting Cube');

  cube.rotate(AxisVertex.YAW, CubeRotationDirection.ClockWise);
  showCubeDetails(cube, 'Cube rotation: <Yaw ClockWise>');

  cube.rotate(AxisVertex.YAW, CubeRotationDirection.ClockWise);
  showCubeDetails(cube, 'Cube rotation: <Yaw ClockWise>');
});
