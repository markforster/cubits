/* istanbul ignore file */

import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { determinRotationAxis } from '../src/lib/determinRotationAxis';
import { newCubeState } from '../src/lib/factory';
import { LayersVertex } from './../src/lib/';
import { rotateCubeState } from './../src/lib/rotateCubeState';
import { cubeExample, showCubeDetails } from './lib';

const cubeState: CubeState = newCubeState();

const cube: ICube = new Cube(cubeState);

cubeExample(
  'Rotating a cube via YAW',
  (cube: ICube) => {
    showCubeDetails(cube, 'Starting Cube');

    rotateCubeState(
      cubeState,
      // LayersVertex.FRONT,
      // LayersVertex.TOP,
      // LayersVertex.BACK,
      LayersVertex.LEFT,
      LayersVertex.BACK,
      // LayersVertex.RIGHT,
      // LayersVertex.LEFT,
    );

    showCubeDetails(cube, 'Final Cube');
  },
  cube,
);
