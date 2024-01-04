/* istanbul ignore file */

import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { newCubeState } from '../src/lib/factory';
import { cubeExample, showCubeDetails } from './lib';
import { IOperator, Operator } from '../src/operator';
import { LAYERS } from '../src/lib/layers';
import { CubeRotationDirection } from '../src';

const cubeState: CubeState = newCubeState();

const cube: ICube = new Cube(cubeState);
const operator: IOperator = new Operator();
operator.cube = cube;

cubeExample(
  `Rotating cube layers`,
  (cube: ICube) => {
    showCubeDetails(cube, 'Starting Cube');

    cube.rotateLayer(LAYERS.TOP, CubeRotationDirection.ClockWise);
    cube.rotateLayer(LAYERS.EQUATOR, CubeRotationDirection.ClockWise);
    cube.rotateLayer(LAYERS.BOTTOM, CubeRotationDirection.AntiClockWise);
    showCubeDetails(cube, 'Cube after Rotating!');
  },
  cube,
);
