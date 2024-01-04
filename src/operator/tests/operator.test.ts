import { tokeniseNotation, executeTurns } from './../lib';

import { IOperator, Operator } from '..';
import { Cube } from '../../cube/Cube';
import { ICube } from '../../cube/ICube';

jest.mock('./../lib');

describe(`Setting and getting the operators cube state`, () => {
  const cube: ICube = new Cube();
  const operator: IOperator = new Operator();
  operator.cube = cube;

  test('It should return the cube from its cube property', () => {
    expect(operator.cube).toBe(cube);
  });
});

describe(`Invoking execute on a string of notation`, () => {
  const cube: ICube = new Cube();
  const operator: IOperator = new Operator();
  operator.cube = cube;

  const checkArray: any = [Symbol(1), Symbol(2)];
  (tokeniseNotation as jest.Mock).mockReturnValue(checkArray);
  (executeTurns as jest.Mock).mockImplementation(() => {});

  test('It should tokenise the notation and execute it', () => {
    operator.execute('X Y Z');

    expect(tokeniseNotation as jest.Mock).toBeCalledWith('XYZ');
    expect(tokeniseNotation as jest.Mock).toBeCalledTimes(1);
    expect(executeTurns as jest.Mock).toBeCalledWith(checkArray, cube);
    expect(executeTurns as jest.Mock).toBeCalledTimes(1);
  });
});
