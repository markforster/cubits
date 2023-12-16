/* istanbul ignore file */

import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { newCubeState } from '../src/lib/factory';
import { cubeExample, showCubeDetails } from './lib';
import { Orientation } from '../src/cube/lib';

const cubeState: CubeState = newCubeState();

const cube: ICube = new Cube(cubeState);

cubeExample(
  'Rotating a cube via YAW',
  (cube: ICube) => {
    showCubeDetails(cube, 'Starting Cube');

    cube.orientate(Orientation.FRONT, Orientation.BACK);

    showCubeDetails(cube, 'Cube after moving Front to Back');

    cube.orientate(Orientation.TOP, Orientation.LEFT, Orientation.BACK);

    showCubeDetails(cube, 'Cube after moving Top to Left preserving Back');
  },
  cube,
);
