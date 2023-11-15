import { CubeState } from '../../cube';
import { RotationAngle } from '../../cube/lib';
import { COLOURS } from '../colours';
import { newCubeState } from '../factory';
import { rotateLayerForColour } from '../rotateLayerForColour';
import { solved } from './solved';

describe('Solving status of a cube state', () => {
  const cubeState: CubeState = newCubeState();

  describe('Individual faces of a new cube should solve as true', () => {
    const cubeState: CubeState = newCubeState();

    it('Should indicate the WHITE face is solved', () => {
      expect(solved(cubeState, COLOURS.WHITE)).toBe(true);
    });

    it('Should indicate the GREEN face is solved', () => {
      expect(solved(cubeState, COLOURS.GREEN)).toBe(true);
    });

    it('Should indicate the BLUE face is solved', () => {
      expect(solved(cubeState, COLOURS.BLUE)).toBe(true);
    });

    it('Should indicate the RED face is solved', () => {
      expect(solved(cubeState, COLOURS.RED)).toBe(true);
    });

    it('Should indicate the YELLOW face is solved', () => {
      expect(solved(cubeState, COLOURS.YELLOW)).toBe(true);
    });

    it('Should indicate the ORANGE face is solved', () => {
      expect(solved(cubeState, COLOURS.ORANGE)).toBe(true);
    });
  });

  it('All faces should solve as true', () => {
    const isSolved: boolean = solved(cubeState);

    expect(isSolved).toBe(true);
  });

  describe('Solving all faces on a none solved cube state', () => {
    const cubeState: CubeState = newCubeState();

    it('Should indicate the white face is solved', () => {
      rotateLayerForColour(cubeState, COLOURS.WHITE, RotationAngle.ClockWise);

      expect(solved(cubeState)).toBe(false);
    });
  });

  describe('Reporting the state of each  face on a none solved cube state', () => {
    const cubeState: CubeState = newCubeState();

    beforeAll(() => {
      rotateLayerForColour(cubeState, COLOURS.WHITE, RotationAngle.ClockWise);
    });

    it('Should indicate the WHITE face is solved', () => {
      expect(solved(cubeState, COLOURS.WHITE)).toBe(true);
    });

    it('Should indicate the YELLOW face is solved', () => {
      expect(solved(cubeState, COLOURS.YELLOW)).toBe(true);
    });

    it('Should indicate the BLUE face is not solved', () => {
      expect(solved(cubeState, COLOURS.BLUE)).toBe(false);
    });

    it('Should indicate the GREEN face is not solved', () => {
      expect(solved(cubeState, COLOURS.GREEN)).toBe(false);
    });

    it('Should indicate the RED face is not solved', () => {
      expect(solved(cubeState, COLOURS.RED)).toBe(false);
    });

    it('Should indicate the ORANGE face is not solved', () => {
      expect(solved(cubeState, COLOURS.ORANGE)).toBe(false);
    });
  });
});
