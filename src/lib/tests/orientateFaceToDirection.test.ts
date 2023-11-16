import { AxisVertex } from '..';
import { CubeState } from '../../cube';
import { Vertex } from '../../cube/lib';
import { COLOURS } from '../colours';
import { newCubeState } from '../factory';
import { orientateFaceToDirection } from '../orientateFaceToDirection';
import { expectColourToHaveNormal } from './lib';

const V_BACK: Vertex = [0, 0, 2];
const V_FRONT: Vertex = [0, 0, -2];
const V_LEFT: Vertex = [-2, 0, 0];
const V_RIGHT: Vertex = [2, 0, 0];
const V_TOP: Vertex = [0, 2, 0];
const V_BOTTOM: Vertex = [0, -2, 0];
// const ALL_AXIS: [Vertex, Vertex, Vertex] = [
//   AxisVertex.ROLL,
//   AxisVertex.YAW,
//   AxisVertex.PITCH,
// ];
// const ALL_AXIS: [Vertex, Vertex, Vertex] = [
//   AxisVertex.ROLL,
//   AxisVertex.PITCH,
//   AxisVertex.YAW,
// ];
// [AxisVertex.ROLL, AxisVertex.PITCH, AxisVertex.YAW]

describe('Orienting the faces of a Cube from an initial orientation given a new orientation for the Top faces', () => {
  let cubeState: CubeState;

  beforeEach(() => {
    // Reset cube state!
    cubeState = newCubeState();
  });

  describe('The cubstate should be in a default state before being oriented to any face', () => {
    it('White should be at the top', () => {
      expectColourToHaveNormal(cubeState, COLOURS.WHITE, V_TOP);
    });

    it('Blue should be at the back', () => {
      expectColourToHaveNormal(cubeState, COLOURS.BLUE, V_BACK);
    });

    it('Yellow should to the bottom', () => {
      expectColourToHaveNormal(cubeState, COLOURS.YELLOW, V_BOTTOM);
    });

    it('Orange should be to the left', () => {
      expectColourToHaveNormal(cubeState, COLOURS.ORANGE, V_LEFT);
    });

    it('Red should be to the right', () => {
      expectColourToHaveNormal(cubeState, COLOURS.RED, V_RIGHT);
    });

    it('Green should be at the front', () => {
      expectColourToHaveNormal(cubeState, COLOURS.GREEN, V_FRONT);
    });
  });

  describe('When the cube state is rotated so that Blue is at the top', () => {
    beforeEach(() => {
      orientateFaceToDirection(cubeState, COLOURS.BLUE, V_TOP);
    });

    it('Blue should be at the top', () => {
      expectColourToHaveNormal(cubeState, COLOURS.BLUE, V_TOP);
    });

    it('White should be at the front', () => {
      expectColourToHaveNormal(cubeState, COLOURS.WHITE, V_FRONT);
    });

    it('Yellow should to the back', () => {
      expectColourToHaveNormal(cubeState, COLOURS.YELLOW, V_BACK);
    });

    it('Orange should be to the left and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.ORANGE, V_LEFT);
    });

    it('Red should be to the right and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.RED, V_RIGHT);
    });

    it('Green should be at the bottom', () => {
      expectColourToHaveNormal(cubeState, COLOURS.GREEN, V_BOTTOM);
    });
  });

  describe('When the cube state is rotated so that Red is at the top', () => {
    beforeEach(() => {
      orientateFaceToDirection(cubeState, COLOURS.RED, V_TOP);
    });

    it('Blue should be at the back and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.BLUE, V_BACK);
    });

    it('White should to the left', () => {
      expectColourToHaveNormal(cubeState, COLOURS.WHITE, V_LEFT);
    });

    it('Yellow should to the right', () => {
      expectColourToHaveNormal(cubeState, COLOURS.YELLOW, V_RIGHT);
    });

    it('Orange should at the bottom', () => {
      expectColourToHaveNormal(cubeState, COLOURS.ORANGE, V_BOTTOM);
    });

    it('Red should be at the top', () => {
      expectColourToHaveNormal(cubeState, COLOURS.RED, V_TOP);
    });

    it('Green should be at the front and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.GREEN, V_FRONT);
    });
  });

  describe('When the cube state is rotated so that Green is at the top', () => {
    beforeEach(() => {
      orientateFaceToDirection(cubeState, COLOURS.GREEN, V_TOP);
    });

    it('Blue should be at the bottom', () => {
      expectColourToHaveNormal(cubeState, COLOURS.BLUE, V_BOTTOM);
    });

    it('White should at the back', () => {
      expectColourToHaveNormal(cubeState, COLOURS.WHITE, V_BACK);
    });

    it('Yellow should to the front', () => {
      expectColourToHaveNormal(cubeState, COLOURS.YELLOW, V_FRONT);
    });

    it('Orange should at the left and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.ORANGE, V_LEFT);
    });

    it('Red should be at the top and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.RED, V_RIGHT);
    });

    it('Green should be at top', () => {
      expectColourToHaveNormal(cubeState, COLOURS.GREEN, V_TOP);
    });
  });

  describe('When the cube state is rotated so that Orange is at the top', () => {
    beforeEach(() => {
      orientateFaceToDirection(cubeState, COLOURS.ORANGE, V_TOP);
    });

    it('Blue should be at the back and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.BLUE, V_BACK);
    });

    it('White should to the right', () => {
      expectColourToHaveNormal(cubeState, COLOURS.WHITE, V_RIGHT);
    });

    it('Yellow should be to the left', () => {
      expectColourToHaveNormal(cubeState, COLOURS.YELLOW, V_LEFT);
    });

    it('Orange should at the top', () => {
      expectColourToHaveNormal(cubeState, COLOURS.ORANGE, V_TOP);
    });

    it('Red should be at the bottom', () => {
      expectColourToHaveNormal(cubeState, COLOURS.RED, V_BOTTOM);
    });

    it('Green should be at the front and should not have moved side', () => {
      expectColourToHaveNormal(cubeState, COLOURS.GREEN, V_FRONT);
    });
  });
});
