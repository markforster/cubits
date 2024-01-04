/* istanbul ignore file */

import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { newCubeState } from '../src/lib/factory';
import { cubeExample, showCubeDetails } from './lib';
import { IOperator, Operator } from './../src/operator';

const cubeState: CubeState = newCubeState();

const cube: ICube = new Cube(cubeState);
const operator: IOperator = new Operator();
operator.cube = cube;

// const notation = `fUuLRRUR'XXZ`;
// const notation = `fLfU`;
// const notation = `M'`;
// const notation = `fR`;

// const notation = `fLfUE'XX'`;
// const notation = `E`;
// const notation = `Z`;
// const notation = `Y`;
// const notation = `X'2`;
// const notation = `X2`;
// const notation = `fUuLRRJUR'XXZ`;
// const notation = `U`;
// const notation = `U'`;
// const notation = `F`;
// const notation = `F`;
// const notation = `M`;
// const notation = `E`;
// const notation = `S`;
const notation = `M'2`;

cubeExample(
  `Executing cube notation "${notation}"`,
  (cube: ICube) => {
    showCubeDetails(cube, 'Starting Cube');

    operator.execute(notation);

    showCubeDetails(cube, 'Cube after moving Top to Left preserving Back');
  },
  cube,
);
