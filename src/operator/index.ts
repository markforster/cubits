import { ICube } from '../cube/ICube';
import { tokeniseNotation, executeTurns } from './lib';
import { Turn } from './types';

export interface IOperator {
  cube: ICube;
  execute(notation: string): void;
}

export class Operator implements IOperator {
  private _cube: ICube;

  public get cube(): ICube {
    return this._cube;
  }

  public set cube(cube: ICube) {
    this._cube = cube;
  }

  execute(notation: string): void {
    const turns: Turn[] = tokeniseNotation(notation.replace(/\s/gi, ''));
    executeTurns(turns, this._cube);
  }
}
