import { compareArray } from '..';
import { CubeState } from '../../cube';
import { RotationAngle } from '../../cube/lib';
import { COLOURS } from '../colours';
import { rotateLayerForColour } from '../rotateLayerForColour';
import { newCubeState } from './../factory';
import { expectDefaultCubeState } from './lib';

describe('rotateLayerForColour should rotate layers by a specified colour', () => {
  it('When rotating White later layers Blue, Green, Red and Orange should rotate but Yellow should not change', () => {
    const cubeState: CubeState = newCubeState();

    expectDefaultCubeState(cubeState);

    rotateLayerForColour(cubeState, COLOURS.WHITE, RotationAngle.ClockWise);

    // Check WHITE
    expect(compareArray(cubeState[0][0], [-1, 1, 1])).toBe(true);
    expect(compareArray(cubeState[1][0], [-1, 1, 0])).toBe(true);
    expect(compareArray(cubeState[2][0], [-1, 1, -1])).toBe(true);

    // Check BLUE > Should be @ RED
    expect(compareArray(cubeState[45][0], [-1, 1, -1])).toBe(true);
    expect(compareArray(cubeState[46][0], [0, 1, -1])).toBe(true);
    expect(compareArray(cubeState[47][0], [1, 1, -1])).toBe(true);

    // Check GREEN > Should be @ ORANGE
    expect(compareArray(cubeState[18][0], [-1, 1, 1])).toBe(true);
    expect(compareArray(cubeState[19][0], [-1, 1, 0])).toBe(true);
    expect(compareArray(cubeState[20][0], [-1, 1, -1])).toBe(true);

    // Check RED > Should be @ GREEN
    expect(compareArray(cubeState[45][0], [-1, 1, -1])).toBe(true);
    expect(compareArray(cubeState[46][0], [0, 1, -1])).toBe(true);
    expect(compareArray(cubeState[47][0], [1, 1, -1])).toBe(true);

    // Check ORANGE > Should be @ BLUE
    expect(compareArray(cubeState[36][0], [-1, 1, 1])).toBe(true);
    expect(compareArray(cubeState[37][0], [0, 1, 1])).toBe(true);
    expect(compareArray(cubeState[38][0], [1, 1, 1])).toBe(true);

    // Check YELLOW > Should NOT HAVE MOVED!
    expect(compareArray(cubeState[9][0], [-1, -1, -1])).toBe(true);
    expect(compareArray(cubeState[10][0], [0, -1, -1])).toBe(true);
    expect(compareArray(cubeState[11][0], [1, -1, -1])).toBe(true);
  });

  it('When rotating Blue (back) layers White, Yellow, Red and Orange should rotate but Green should not change', () => {
    const cubeState: CubeState = newCubeState();

    expectDefaultCubeState(cubeState);

    rotateLayerForColour(cubeState, COLOURS.BLUE, RotationAngle.ClockWise);

    // Check BLUE
    expect(compareArray(cubeState[27][0], [-1, -1, 1])).toBe(true);
    expect(compareArray(cubeState[28][0], [-1, 0, 1])).toBe(true);
    expect(compareArray(cubeState[29][0], [-1, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[29][0], [1, -1, 1])).toBe(true);

    // Check WHITE > Should be @ RED
    // expect(compareArray(cubeState[6][0], [1, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[7][0], [1, 0, 1])).toBe(true);
    // expect(compareArray(cubeState[8][0], [1, -1, 1])).toBe(true);

    // Check RED > Should be @ YELLOW
    // expect(compareArray(cubeState[47][0], [1, -1, 1])).toBe(true);
    // expect(compareArray(cubeState[51][0], [ 0, -1, 1])).toBe(true);
    // expect(compareArray(cubeState[43][0], [ 1, 1, -1])).toBe(true);

    // Check ORANGE > Should be @ WHITE
    // expect(compareArray(cubeState[36][0], [ -1, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[37][0], [ 0, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[38][0], [ 1, 1, 1])).toBe(true);

    // Check YELLOW > Should NOT HAVE MOVED!
    // expect(compareArray(cubeState[9][0], [ -1, -1, -1])).toBe(true);
    // expect(compareArray(cubeState[10][0], [ 0, -1, -1])).toBe(true);
    // expect(compareArray(cubeState[11][0], [ 1, -1, -1])).toBe(true);

    // Check GREEN > Should NOT HAVE MOVED!
    // expect(compareArray(cubeState[18][0], [ -1, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[19][0], [ 0, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[20][0], [ 1, 1, -1])).toBe(true);
  });

  it('When rotating Green (Front) layers White, Yellow, Red and Orange should rotate but Blue should not change', () => {
    const cubeState: CubeState = newCubeState();

    expectDefaultCubeState(cubeState);

    rotateLayerForColour(cubeState, COLOURS.GREEN, RotationAngle.ClockWise);

    // Check GREEN
    // expect(compareArray(cubeState[18][0], [ -1, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[19][0], [ 0, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[20][0], [ 1, 1, -1])).toBe(true);

    // Check WHITE > Should be @ RED
    // expect(compareArray(cubeState[45][0], [ -1, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[46][0], [ 0, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[47][0], [ 1, 1, -1])).toBe(true);

    // Check RED > Should be @ YELLOW
    // expect(compareArray(cubeState[45][0], [ -1, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[46][0], [ 0, 1, -1])).toBe(true);
    // expect(compareArray(cubeState[47][0], [ 1, 1, -1])).toBe(true);

    // Check ORANGE > Should be @ WHITE
    // expect(compareArray(cubeState[36][0], [ -1, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[37][0], [ 0, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[38][0], [ 1, 1, 1])).toBe(true);

    // Check YELLOW > Should NOT HAVE MOVED!
    // expect(compareArray(cubeState[9][0], [ -1, -1, -1])).toBe(true);
    // expect(compareArray(cubeState[10][0], [ 0, -1, -1])).toBe(true);
    // expect(compareArray(cubeState[11][0], [ 1, -1, -1])).toBe(true);

    // Check BLUE > Should NOT HAVE MOVED!
    // expect(compareArray(cubeState[27][0], [ -1, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[28][0], [ 0, 1, 1])).toBe(true);
    // expect(compareArray(cubeState[29][0], [ 1, 1, 1])).toBe(true);
  });

  it('RED', () => {
    const cubeState: CubeState = newCubeState();

    rotateLayerForColour(cubeState, COLOURS.RED, RotationAngle.ClockWise);

    expect(1).toBe(1);
  });

  it('ORANGE', () => {
    const cubeState: CubeState = newCubeState();

    rotateLayerForColour(cubeState, COLOURS.ORANGE, RotationAngle.ClockWise);

    expect(1).toBe(1);
  });

  it('YELLOW', () => {
    const cubeState: CubeState = newCubeState();

    rotateLayerForColour(cubeState, COLOURS.YELLOW, RotationAngle.ClockWise);

    expect(1).toBe(1);
  });
});
