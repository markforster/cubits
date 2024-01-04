import { IOperator, Operator } from '..';
import { CubeState } from '../../cube';
import { Cube } from '../../cube/Cube';
import { ICube } from '../../cube/ICube';
import { newCubeState } from '../../lib/factory';

describe('Rotating a cube around its X axis', () => {
  const cubeState: CubeState = newCubeState();
  const cube: ICube = new Cube(cubeState);
  const operator: IOperator = new Operator();
  operator.cube = cube;

  it('Should ???', () => {});
});
