import { TokenErrorAtIndex, tokeniseNotation } from '../lib';
import { Turn, TurnType } from '../types';

describe('Parsing notation string into tokens then turns', () => {
  it('It should create 1 turn of type CubeRotation with a token of "X" when passed notation "X"', () => {
    expect(tokeniseNotation('X')).toEqual([
      {
        turnType: TurnType.CubeRotation,
        token: 'X',
      },
    ] satisfies Turn[]);
  });

  it('It should create 2 turns of type CubeRotation with notation of "XY"', () => {
    expect(tokeniseNotation('XY')).toEqual([
      {
        turnType: TurnType.CubeRotation,
        token: 'X',
      },
      {
        turnType: TurnType.CubeRotation,
        token: 'Y',
      },
    ] satisfies Turn[]);
  });

  it('It should create 1 turn of type OuterLayerRotation with notation of "F"', () => {
    expect(tokeniseNotation('F')).toEqual([
      {
        turnType: TurnType.OuterLayerRotation,
        token: 'F',
      },
    ] satisfies Turn[]);
  });

  it(`It should create 1 turn of type OuterLayerRotation with notation of "U'"`, () => {
    expect(tokeniseNotation(`U'`)).toEqual([
      {
        turnType: TurnType.OuterLayerRotation,
        token: `U'`,
      },
    ] satisfies Turn[]);
  });

  it(`It should create 1 turn of type InnerLayerRotation with notation of "E"`, () => {
    expect(tokeniseNotation(`E`)).toEqual([
      {
        turnType: TurnType.InnerLayerRotation,
        token: `E`,
      },
    ] satisfies Turn[]);
  });

  it(`It should create 1 turn of type InnerLayerRotation with notation of "E'"`, () => {
    expect(tokeniseNotation(`E'`)).toEqual([
      {
        turnType: TurnType.InnerLayerRotation,
        token: `E'`,
      },
    ] satisfies Turn[]);
  });

  it(`It should throw an error when invalid notation is given to it`, () => {
    const t = () => {
      tokeniseNotation(`P`);
    };
    expect(t).toThrowError();
  });

  it(`It should do nothing with an empty string!`, () => {
    tokeniseNotation(``);
  });
});
