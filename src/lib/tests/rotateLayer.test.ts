import { CubeState } from '../..';
import { CubeRotationDirection, Vertex } from '../../cube/lib';
import { cB, cG, cO, cR, cW, cY } from '../colours';
import { coloursForVertices } from '../coloursForVeritces';
import {
  ALL_BLUE_COLOURS,
  ALL_GREEN_COLOURS,
  ALL_ORANGE_COLOURS,
  ALL_RED_COLOURS,
  ALL_WHITE_COLOURS,
  ALL_YELLOW_COLOURS,
} from '../face/tests/faceForFaceOption.lib';
import { newCubeState } from '../factory';
import { Layer } from '../rotate';
import { rotateLayer } from '../rotateLayer';
import { expectDefaultCubeState } from './lib';

// TODO: Complete these tests. They are blocked by having a good way to query the cube!
describe(`Rotating layers`, () => {
  describe(`Rotating the top (White) layer clockwise`, () => {
    let cubeState: CubeState;
    const topI: Vertex[] = [
      [-1, 2, -1], [0, 2, -1], [1, 2, -1], 
      [-1, 2, 0], [0, 2, 0], [1, 2, 0], 
      [-1, 2, 1], [0, 2, 1], [1, 2, 1], 
    ];
    const topLeft: Vertex[] = [
      [-2, 1, -1], [-2, 1, 0],[-2, 1, 1],
    ];
    const frontTop: Vertex[] = [
      [-1, 1, -2], [0, 1, -2],[1, 1, -2],
    ];
    beforeAll(() => {
      cubeState = newCubeState();
    });

    describe(`Before rotating`, () => {
      it(`The cube should be in a default state`, () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The top of the cube should be all white`, () => {
        expect(coloursForVertices(topI, cubeState)).toEqual(ALL_WHITE_COLOURS);
      });

      it(`The top left of the cube should be orange`, () => {
        expect(coloursForVertices(topLeft, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The top front of the cube should be green`, () => {
        expect(coloursForVertices(frontTop, cubeState)).toEqual([cG, cG, cG]);
      });
    });

    describe(`After rotating`, () => {
      beforeAll(() => {
        rotateLayer(Layer.TOP, CubeRotationDirection.ClockWise, cubeState);
      });

      it(`The top of the cube should be all white`, () => {
        expect(coloursForVertices(topI, cubeState)).toEqual(ALL_WHITE_COLOURS);
      });

      it(`The top left of the cube should be green`, () => {
        expect(coloursForVertices(topLeft, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The top front of the cube should be red`, () => {
        expect(coloursForVertices(frontTop, cubeState)).toEqual([cR, cR, cR]);
      });
    });
  });

  describe(`Rotating the top (White) layer anticlockwise`, () => {
    let cubeState: CubeState;

    let topI: Vertex[];
    let topRight: Vertex[];
    let frontTop: Vertex[];

    beforeAll(() => {
      cubeState = newCubeState();
      topI = [
        [-1, 2, -1], [0, 2, -1], [1, 2, -1], 
        [-1, 2, 0], [0, 2, 0], [1, 2, 0], 
        [-1, 2, 1], [0, 2, 1], [1, 2, 1], 
      ];
      topRight = [
        [2, 1, -1], [2, 1, 0],[2, 1, 1],
      ];
      frontTop = [
        [-1, 1, -2], [0, 1, -2],[1, 1, -2],
      ];
    });

    describe(`Before rotating`, () => {
      it(`The cube should be in a default state`, () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The top layer (White) should be all white`, () => {
        expect(coloursForVertices(topI, cubeState)).toEqual(ALL_WHITE_COLOURS);
      });
      it(`The top right layer should be red`, () => {
        expect(coloursForVertices(topRight, cubeState)).toEqual([cR, cR, cR]);
      });
      it(`The top front layer should be green`, () => {
        expect(coloursForVertices(frontTop, cubeState)).toEqual([cG, cG, cG]);
      });
    });

    describe(`After rotating`, () => {
      beforeAll(() => {
        rotateLayer(Layer.TOP, CubeRotationDirection.AntiClockWise, cubeState);
      });

      it(`The top layer (White) should be all white`, () => {
        expect(coloursForVertices(topI, cubeState)).toEqual(ALL_WHITE_COLOURS);
      });
      it(`The top right layer should be green`, () => {
        expect(coloursForVertices(topRight, cubeState)).toEqual([cG, cG, cG]);
      });
      it(`The top front layer should be orange`, () => {
        expect(coloursForVertices(frontTop, cubeState)).toEqual([cO, cO, cO]);
      });
    });
  });

  describe(`Rotating the bottom (Yellow) layer clockwise`, () => {
    let cubeState: CubeState;
    let bottomI: Vertex[];
    let topRight: Vertex[];
    let frontTop: Vertex[];

    beforeAll(() => {
      cubeState = newCubeState();
      bottomI = [
        [-1, -2, -1], [0, -2, -1], [1, -2, -1], 
        [-1, -2, 0], [0, -2, 0], [1, -2, 0], 
        [-1, -2, 1], [0, -2, 1], [1, -2, 1], 
      ];
      topRight = [
        [2, 1, -1], [2, 1, 0],[2, 1, 1],
      ];
      frontTop = [
        [-1, 1, -2], [0, 1, -2],[1, 1, -2],
      ];
    });

    describe(`Before rotating`, () => {
      it('Should NOT have rotated left and front top indices', () => {
        expectDefaultCubeState(cubeState);
        expect(coloursForVertices(bottomI, cubeState)).toEqual(ALL_YELLOW_COLOURS);
        expect(coloursForVertices(topRight, cubeState)).toEqual([cR, cR, cR]);
        expect(coloursForVertices(frontTop, cubeState)).toEqual([cG, cG, cG]);
  
        rotateLayer(Layer.BOTTOM, CubeRotationDirection.ClockWise, cubeState);
  
        expect(coloursForVertices(bottomI, cubeState)).toEqual(ALL_YELLOW_COLOURS);
        expect(coloursForVertices(topRight, cubeState)).toEqual([cR, cR, cR]);
        expect(coloursForVertices(frontTop, cubeState)).toEqual([cG, cG, cG]);
      });
    });
    
    describe(`After rotating`, () => {});
  });

  describe(`Rotating the bottom (Yellow) layer clockwise`, () => {
    let cubeState: CubeState;
    const bottomI: Vertex[] = [
      [-1, -2, -1], [0, -2, -1], [1, -2, -1], 
      [-1, -2, 0], [0, -2, 0], [1, -2, 0], 
      [-1, -2, 1], [0, -2, 1], [1, -2, 1], 
    ];
    const bottomLeft: Vertex[] = [
      [-2, -1, -1], [-2, -1, 0],[-2, -1, 1],
    ];
    const frontBottom: Vertex[] = [
      [-1, -1, -2], [0, -1, -2],[1, -1, -2],
    ];
    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated left and front bottom indices', () => {
      expectDefaultCubeState(cubeState);
      // eslint-disable-next-line prettier/prettier
      expect(coloursForVertices(bottomI, cubeState)).toEqual(ALL_YELLOW_COLOURS);
      expect(coloursForVertices(bottomLeft, cubeState)).toEqual([cO, cO, cO]);
      expect(coloursForVertices(frontBottom, cubeState)).toEqual([cG, cG, cG]);

      rotateLayer(Layer.BOTTOM, CubeRotationDirection.ClockWise, cubeState);

      expect(coloursForVertices(bottomI, cubeState)).toEqual(ALL_YELLOW_COLOURS);
      expect(coloursForVertices(bottomLeft, cubeState)).toEqual([cB, cB, cB]);
      expect(coloursForVertices(frontBottom, cubeState)).toEqual([cO, cO, cO]);
    });
  });

  describe(`Rotating the left (Orange) layer clockwise`, () => {
    let cubeState: CubeState;
    const leftI: Vertex[] = [
      [-2, 1, -1], [-2, 1, 0], [-2, 1, 1],
      [-2, 0, -1], [-2, 0, 0], [-2, 0, 1],
      [-2, -1, -1], [-2, -1, 0], [-2, -1, 1],
    ];

    const topLeft: Vertex[] = [
      [-1, 2, -1], [-1, 2, 0], [-1, 2, 1]
    ];

    const flI: Vertex[] = [
      [-1, 1, -2], [-1, 0, -2], [-1, -1, -2]
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(leftI, cubeState)).toEqual(ALL_ORANGE_COLOURS);
      expect(coloursForVertices(topLeft, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(flI, cubeState)).toEqual([cG, cG, cG]);

      rotateLayer(Layer.LEFT, CubeRotationDirection.ClockWise, cubeState);

      expect(coloursForVertices(leftI, cubeState)).toEqual(ALL_ORANGE_COLOURS);
      expect(coloursForVertices(topLeft, cubeState)).toEqual([cB, cB, cB]);
      expect(coloursForVertices(flI, cubeState)).toEqual([cW, cW, cW]);
    });
  });

  describe(`Rotating the left (Orange) layer anticlockwise`, () => {
    let cubeState: CubeState;
    const leftI: Vertex[] = [
      [-2, 1, -1], [-2, 1, 0], [-2, 1, 1],
      [-2, 0, -1], [-2, 0, 0], [-2, 0, 1],
      [-2, -1, -1], [-2, -1, 0], [-2, -1, 1],
    ];

    const topLeft: Vertex[] = [
      [-1, 2, -1], [-1, 2, 0], [-1, 2, 1]
    ];

    const flI: Vertex[] = [
      [-1, 1, -2], [-1, 0, -2], [-1, -1, -2]
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(leftI, cubeState)).toEqual(ALL_ORANGE_COLOURS);
      expect(coloursForVertices(topLeft, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(flI, cubeState)).toEqual([cG, cG, cG]);

      rotateLayer(Layer.LEFT, CubeRotationDirection.AntiClockWise, cubeState);

      expect(coloursForVertices(leftI, cubeState)).toEqual(ALL_ORANGE_COLOURS);
      expect(coloursForVertices(topLeft, cubeState)).toEqual([cG, cG, cG]);
      expect(coloursForVertices(flI, cubeState)).toEqual([cY, cY, cY]);
    });
  });

  describe(`Rotating the right (Red) layer clockwise`, () => {
    let cubeState: CubeState;
    const rightI: Vertex[] = [
      [2, 1, -1], [2, 1, 0], [2, 1, 1],
      [2, 0, -1], [2, 0, 0], [2, 0, 1],
      [2, -1, -1], [2, -1, 0], [2, -1, 1],
    ];

    const topRight: Vertex[] = [
      [1, 2, -1], [1, 2, 0], [1, 2, 1]
    ];

    const frI: Vertex[] = [
      [1, 1, -2], [1, 0, -2], [1, -1, -2]
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(rightI, cubeState)).toEqual(ALL_RED_COLOURS);
      expect(coloursForVertices(topRight, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(frI, cubeState)).toEqual([cG, cG, cG]);

      rotateLayer(Layer.RIGHT, CubeRotationDirection.ClockWise, cubeState);

      expect(coloursForVertices(rightI, cubeState)).toEqual(ALL_RED_COLOURS);
      expect(coloursForVertices(topRight, cubeState)).toEqual([cG, cG, cG]);
      expect(coloursForVertices(frI, cubeState)).toEqual([cY, cY, cY]);
    });
  });

  describe(`Rotating the right (Red) layer anticlockwise`, () => {
    let cubeState: CubeState;
    const rightI: Vertex[] = [
      [2, 1, -1], [2, 1, 0], [2, 1, 1],
      [2, 0, -1], [2, 0, 0], [2, 0, 1],
      [2, -1, -1], [2, -1, 0], [2, -1, 1],
    ];

    const topRight: Vertex[] = [
      [1, 2, -1], [1, 2, 0], [1, 2, 1]
    ];

    const frI: Vertex[] = [
      [1, 1, -2], [1, 0, -2], [1, -1, -2]
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(rightI, cubeState)).toEqual(ALL_RED_COLOURS);
      expect(coloursForVertices(topRight, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(frI, cubeState)).toEqual([cG, cG, cG]);

      rotateLayer(Layer.RIGHT, CubeRotationDirection.AntiClockWise, cubeState);

      expect(coloursForVertices(rightI, cubeState)).toEqual(ALL_RED_COLOURS);
      expect(coloursForVertices(topRight, cubeState)).toEqual([cB, cB, cB]);
      expect(coloursForVertices(frI, cubeState)).toEqual([cW, cW, cW]);
    });
  });

  describe(`Rotating the front (Green) layer clockwise`, () => {
    let cubeState: CubeState;
    const fI: Vertex[] = [
      [-1, 1, -2], [0, 1, -2], [1, 1, -2],
      [-1, 0, -2], [0, 0, -2], [1, 0, -2],
      [-1, -1, -2], [0, -1, -2], [1, -1, -2],
    ];

    const ufI: Vertex[] = [
      [-1, 2, -1], [0, 2, -1], [1, 2, -1]
    ];

    const lfI: Vertex[] = [
      [-2, 1, -1], [-2, 0, -1], [-2, -1, -1],
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(fI, cubeState)).toEqual(ALL_GREEN_COLOURS);
      expect(coloursForVertices(ufI, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(lfI, cubeState)).toEqual([cO, cO, cO]);

      rotateLayer(Layer.FRONT, CubeRotationDirection.ClockWise, cubeState);

      expect(coloursForVertices(fI, cubeState)).toEqual(ALL_GREEN_COLOURS);
      expect(coloursForVertices(ufI, cubeState)).toEqual([cO, cO, cO]);
      expect(coloursForVertices(lfI, cubeState)).toEqual([cY, cY, cY]);
    });
  });

  describe(`Rotating the front (Green) layer anticlockwise`, () => {
    let cubeState: CubeState;
    const fI: Vertex[] = [
      [-1, 1, -2], [0, 1, -2], [1, 1, -2],
      [-1, 0, -2], [0, 0, -2], [1, 0, -2],
      [-1, -1, -2], [0, -1, -2], [1, -1, -2],
    ];

    const ufI: Vertex[] = [
      [-1, 2, -1], [0, 2, -1], [1, 2, -1]
    ];

    const lfI: Vertex[] = [
      [-2, 1, -1], [-2, 0, -1], [-2, -1, -1],
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(fI, cubeState)).toEqual(ALL_GREEN_COLOURS);
      expect(coloursForVertices(ufI, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(lfI, cubeState)).toEqual([cO, cO, cO]);

      rotateLayer(Layer.FRONT, CubeRotationDirection.ClockWise, cubeState);

      expect(coloursForVertices(fI, cubeState)).toEqual(ALL_GREEN_COLOURS);
      expect(coloursForVertices(ufI, cubeState)).toEqual([cO, cO, cO]);
      expect(coloursForVertices(lfI, cubeState)).toEqual([cY, cY, cY]);
    });
  });

  describe(`Rotating the back (Blue) layer clockwise`, () => {
    let cubeState: CubeState;
    const bI: Vertex[] = [
      [-1, 1, 2], [0, 1, 2], [1, 1, 2],
      [-1, 0, 2], [0, 0, 2], [1, 0, 2],
      [-1, -1, 2], [0, -1, 2], [1, -1, 2],
    ];

    const ubI: Vertex[] = [
      [-1, 2, 1], [0, 2, 1], [1, 2, 1]
    ];

    const lbI: Vertex[] = [
      [-2, 1, 1], [-2, 0, 1], [-2, -1, 1],
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(bI, cubeState)).toEqual(ALL_BLUE_COLOURS);
      expect(coloursForVertices(ubI, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(lbI, cubeState)).toEqual([cO, cO, cO]);

      rotateLayer(Layer.BACK, CubeRotationDirection.ClockWise, cubeState);

      expect(coloursForVertices(bI, cubeState)).toEqual(ALL_BLUE_COLOURS);
      expect(coloursForVertices(ubI, cubeState)).toEqual([cO, cO, cO]);
      expect(coloursForVertices(lbI, cubeState)).toEqual([cY, cY, cY]);
    });
  });

  describe(`Rotating the back (Blue) layer anticlockwise`, () => {
    let cubeState: CubeState;
    const bI: Vertex[] = [
      [-1, 1, 2], [0, 1, 2], [1, 1, 2],
      [-1, 0, 2], [0, 0, 2], [1, 0, 2],
      [-1, -1, 2], [0, -1, 2], [1, -1, 2],
    ];

    const ubI: Vertex[] = [
      [-1, 2, 1], [0, 2, 1], [1, 2, 1]
    ];

    const lbI: Vertex[] = [
      [-2, 1, 1], [-2, 0, 1], [-2, -1, 1],
    ];

    beforeEach(() => {
      cubeState = newCubeState();
    });

    it('Should have rotated top and front left indices', () => {
      expectDefaultCubeState(cubeState);
      expect(coloursForVertices(bI, cubeState)).toEqual(ALL_BLUE_COLOURS);
      expect(coloursForVertices(ubI, cubeState)).toEqual([cW, cW, cW]);
      expect(coloursForVertices(lbI, cubeState)).toEqual([cO, cO, cO]);

      rotateLayer(Layer.BACK, CubeRotationDirection.AntiClockWise, cubeState);

      expect(coloursForVertices(bI, cubeState)).toEqual(ALL_BLUE_COLOURS);
      expect(coloursForVertices(ubI, cubeState)).toEqual([cR, cR, cR]);
      // expect(coloursForVertices(lbI, cubeState)).toEqual([cY, cY, cY]);
    });
  });

  describe(`Rotating the Equator layer clockwise`, () => {
    let cubeState: CubeState;
    const efI: Vertex[] = [ [ -1, 0, -2 ], [ 0, 0, -2 ], [ 1, 0, -2 ] ];
    const elI: Vertex[] = [ [ -2, 0, -1 ], [ -2, 0, 0 ], [ -2, 0, 1 ]];
    const ebI: Vertex[] = [ [ -1, 0, 2 ], [ 0, 0, 2 ], [ 1, 0, 2 ]];
    const erI: Vertex[] = [ [ 2, 0, -1 ], [ 2, 0, 0 ], [ 2, 0, 1 ]];

    beforeAll(() => {
      cubeState = newCubeState();
    });

    describe(`Before rotating`, () => {
      it('The cube should be in a default state', () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The front face of the equator layer should be green`, () => {
        expect(coloursForVertices(efI, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The left face of the equator layer should be orange`, () => {
        expect(coloursForVertices(elI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The back face of the equator layer should be blue`, () => {
        expect(coloursForVertices(ebI, cubeState)).toEqual([cB, cB, cB]);
      });

      it(`The right face of the equator layer should be red`, () => {
        expect(coloursForVertices(erI, cubeState)).toEqual([cR, cR, cR]);
      });
    });

    describe(`After rotating`, () => {
      beforeAll(() => {
        rotateLayer(Layer.EQUATOR, CubeRotationDirection.ClockWise, cubeState);
      });

      it(`The front face of the equator layer should be red`, () => {
        expect(coloursForVertices(efI, cubeState)).toEqual([cR, cR, cR]);
      });

      it(`The left face of the equator layer should be green`, () => {
        expect(coloursForVertices(elI, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The back face of the equator layer should be orange`, () => {
        expect(coloursForVertices(ebI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The right face of the equator layer should be blue`, () => {
        expect(coloursForVertices(erI, cubeState)).toEqual([cB, cB, cB]);
      });
    });
  });

  describe(`Rotating the Equator layer anticlockwise`, () => {
    let cubeState: CubeState;
    let efI: Vertex[];
    let elI: Vertex[];
    let ebI: Vertex[];
    let erI: Vertex[];

    beforeAll(() => {
      cubeState = newCubeState();
      efI = [ [ -1, 0, -2 ], [ 0, 0, -2 ], [ 1, 0, -2 ] ];
      elI = [ [ -2, 0, -1 ], [ -2, 0, 0 ], [ -2, 0, 1 ]];
      ebI = [ [ -1, 0, 2 ], [ 0, 0, 2 ], [ 1, 0, 2 ]];
      erI = [ [ 2, 0, -1 ], [ 2, 0, 0 ], [ 2, 0, 1 ]];
    });

    describe(`Before rotating`, () => {
      it('The cube should be in a default state', () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The front face of the equator layer should be green`, () => {
        expect(coloursForVertices(efI, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The left face of the equator layer should be orange`, () => {
        expect(coloursForVertices(elI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The back face of the equator layer should be blue`, () => {
        expect(coloursForVertices(ebI, cubeState)).toEqual([cB, cB, cB]);
      });

      it(`The right face of the equator layer should be red`, () => {
        expect(coloursForVertices(erI, cubeState)).toEqual([cR, cR, cR]);
      });
    });

    describe(`After rotating`, () => {
      beforeAll(() => {
        rotateLayer(Layer.EQUATOR, CubeRotationDirection.AntiClockWise, cubeState);
      });

      it(`The front face of the equator layer should be orange`, () => {
        expect(coloursForVertices(efI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The left face of the equator layer should be blue`, () => {
        expect(coloursForVertices(elI, cubeState)).toEqual([cB, cB, cB]);
      });

      it(`The back face of the equator layer should be red`, () => {
        expect(coloursForVertices(ebI, cubeState)).toEqual([cR, cR, cR]);
      });

      it(`The right face of the equator layer should be green`, () => {
        expect(coloursForVertices(erI, cubeState)).toEqual([cG, cG, cG]);
      });
    });
  });

  describe(`Rotating the Standing layer clockwise`, () => {
    let cubeState: CubeState;
    const suI: Vertex[] = [ [ -1, 2, 0], [0, 2, 0], [1, 2, 0] ];
    const slI: Vertex[] = [ [ -2, 1, 0 ], [ -2, 0, 0 ], [ -2, -1, 0 ]];
    const sdI: Vertex[] = [ [ -1, -2, 0 ], [ 0, -2, 0 ], [ 1, -2, 0 ]];
    const srI: Vertex[] = [ [ 2, 1, 0 ], [ 2, 0, 0 ], [ 2, -1, 0 ]];

    beforeAll(() => {
      cubeState = newCubeState();
    });

    describe(`Before rotating`, () => {
      it('The cube should be in a default state', () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The top face of the standing layer should be white`, () => {
        expect(coloursForVertices(suI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The left face of the standing layer should be orange`, () => {
        expect(coloursForVertices(slI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The bottom face of the standing layer should be yellow`, () => {
        expect(coloursForVertices(sdI, cubeState)).toEqual([cY, cY, cY]);
      });

      it(`The right face of the standing layer should be red`, () => {
        expect(coloursForVertices(srI, cubeState)).toEqual([cR, cR, cR]);
      });

      afterAll(() => {
        rotateLayer(Layer.STANDING, CubeRotationDirection.ClockWise, cubeState);
      });
    });

    describe(`After rotating`, () => {
      it(`The top face of the standing layer should be orange`, () => {
        expect(coloursForVertices(suI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The left face of the standing layer should be yellow`, () => {
        expect(coloursForVertices(slI, cubeState)).toEqual([cY, cY, cY]);
      });

      it(`The bottom face of the standing layer should be red`, () => {
        expect(coloursForVertices(sdI, cubeState)).toEqual([cR, cR, cR]);
      });

      it(`The right face of the standing layer should be white`, () => {
        expect(coloursForVertices(srI, cubeState)).toEqual([cW, cW, cW]);
      });
    });
  });

  describe(`Rotating the Standing layer anticlockwise`, () => {
    let cubeState: CubeState;
    const suI: Vertex[] = [ [ -1, 2, 0], [0, 2, 0], [1, 2, 0] ];
    const slI: Vertex[] = [ [ -2, 1, 0 ], [ -2, 0, 0 ], [ -2, -1, 0 ]];
    const sdI: Vertex[] = [ [ -1, -2, 0 ], [ 0, -2, 0 ], [ 1, -2, 0 ]];
    const srI: Vertex[] = [ [ 2, 1, 0 ], [ 2, 0, 0 ], [ 2, -1, 0 ]];

    beforeAll(() => {
      cubeState = newCubeState();
    });

    describe(`Before rotating`, () => {
      it('The cube should be in a default state', () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The top face of the standing layer should be white`, () => {
        expect(coloursForVertices(suI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The left face of the standing layer should be orange`, () => {
        expect(coloursForVertices(slI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The bottom face of the standing layer should be yellow`, () => {
        expect(coloursForVertices(sdI, cubeState)).toEqual([cY, cY, cY]);
      });

      it(`The right face of the standing layer should be red`, () => {
        expect(coloursForVertices(srI, cubeState)).toEqual([cR, cR, cR]);
      });

      afterAll(() => {
        rotateLayer(Layer.STANDING, CubeRotationDirection.AntiClockWise, cubeState);
      });
    });

    describe(`After rotating`, () => {
      it(`The top face of the standing layer should be red`, () => {
        expect(coloursForVertices(suI, cubeState)).toEqual([cR, cR, cR]);
      });

      it(`The left face of the standing layer should be white`, () => {
        expect(coloursForVertices(slI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The bottom face of the standing layer should be orange`, () => {
        expect(coloursForVertices(sdI, cubeState)).toEqual([cO, cO, cO]);
      });

      it(`The right face of the standing layer should be yellow`, () => {
        expect(coloursForVertices(srI, cubeState)).toEqual([cY, cY, cY]);
      });
    });
  });

  describe(`Rotating the Middle layer clockwise`, () => {
    let cubeState: CubeState;
    const mfI: Vertex[] = [ [ 0, -1, -2], [0, 0, -2], [0, 1, -2] ];
    const muI: Vertex[] = [ [ 0, 2, -1], [0, 2, 0], [0, 2, 1]];
    const mbI: Vertex[] = [ [ 0, -1, 2], [0, 0, 2], [0, 1, 2]];
    const mdI: Vertex[] = [ [ 0, -2, -1 ], [0, -2, 0], [0, -2, 1]];

    beforeAll(() => {
      cubeState = newCubeState();
    });

    describe(`Before rotating`, () => {
      it('The cube should be in a default state', () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The front face of the middle layer should be green`, () => {
        expect(coloursForVertices(mfI, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The top face of the middle layer should be white`, () => {
        expect(coloursForVertices(muI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The back face of the middle layer should be blue`, () => {
        expect(coloursForVertices(mbI, cubeState)).toEqual([cB, cB, cB]);
      });

      it(`The bottom face of the middle layer should be yellow`, () => {
        expect(coloursForVertices(mdI, cubeState)).toEqual([cY, cY, cY]);
      });

      afterAll(() => {
        rotateLayer(Layer.MIDDLE, CubeRotationDirection.ClockWise, cubeState);
      });
    });

    describe(`After rotating`, () => {
      it(`The front face of the middle layer should be green`, () => {
        expect(coloursForVertices(mfI, cubeState)).toEqual([cY, cY, cY]);
      });

      it(`The top face of the middle layer should be white`, () => {
        expect(coloursForVertices(muI, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The back face of the middle layer should be blue`, () => {
        expect(coloursForVertices(mbI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The bottom face of the middle layer should be yellow`, () => {
        expect(coloursForVertices(mdI, cubeState)).toEqual([cB, cB, cB]);
      });
    });
  });

  describe(`Rotating the Middle layer anticlockwise`, () => {
    let cubeState: CubeState;
    const mfI: Vertex[] = [ [ 0, -1, -2], [0, 0, -2], [0, 1, -2] ];
    const muI: Vertex[] = [ [ 0, 2, -1], [0, 2, 0], [0, 2, 1]];
    const mbI: Vertex[] = [ [ 0, -1, 2], [0, 0, 2], [0, 1, 2]];
    const mdI: Vertex[] = [ [ 0, -2, -1 ], [0, -2, 0], [0, -2, 1]];

    beforeAll(() => {
      cubeState = newCubeState();
    });

    describe(`Before rotating`, () => {
      it('The cube should be in a default state', () => {
        expectDefaultCubeState(cubeState);
      });

      it(`The front face of the middle layer should be green`, () => {
        expect(coloursForVertices(mfI, cubeState)).toEqual([cG, cG, cG]);
      });

      it(`The top face of the middle layer should be white`, () => {
        expect(coloursForVertices(muI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The back face of the middle layer should be blue`, () => {
        expect(coloursForVertices(mbI, cubeState)).toEqual([cB, cB, cB]);
      });

      it(`The bottom face of the middle layer should be yellow`, () => {
        expect(coloursForVertices(mdI, cubeState)).toEqual([cY, cY, cY]);
      });

      afterAll(() => {
        rotateLayer(Layer.MIDDLE, CubeRotationDirection.AntiClockWise, cubeState);
      });
    });

    describe(`After rotating`, () => {
      it(`The front face of the middle layer should be white`, () => {
        expect(coloursForVertices(mfI, cubeState)).toEqual([cW, cW, cW]);
      });

      it(`The top face of the middle layer should be blue`, () => {
        expect(coloursForVertices(muI, cubeState)).toEqual([cB, cB, cB]);
      });

      it(`The back face of the middle layer should be yellow`, () => {
        expect(coloursForVertices(mbI, cubeState)).toEqual([cY, cY, cY]);
      });

      it(`The bottom face of the middle layer should be green`, () => {
        expect(coloursForVertices(mdI, cubeState)).toEqual([cG, cG, cG]);
      });
    });
  });
});
