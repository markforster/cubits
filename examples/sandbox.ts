type TEST1 = number;
type TEST2 = number;

interface Test1 {}
interface Test2 {}

type TestOption = Test1 | Test2;

const White: TestOption = {};

console.log(typeof m);

// enum COLOURS {
//   White,
//   Yellow,
//   Red,
//   Orange,
//   Green,
//   Blue,
// }

// enum ORIENTATIONS {
//   Top,
//   Bottom,
//   Left,
//   Right,
//   Front,
//   Back,
// }

// /* eslint-disable @typescript-eslint/consistent-type-assertions */
// type Colour = {
//   type: 'colour';
//   value: string;
// };

// type Orientation = {
//   type: 'orientation';
//   value: string;
// };

// const Colours = {
//   White: { type: 'colour', value: 'White' } as Colour,
//   Yellow: { type: 'colour', value: 'Yellow' } as Colour,
//   Red: { type: 'colour', value: 'Red' } as Colour,
//   Orange: { type: 'colour', value: 'Orange' } as Colour,
//   Green: { type: 'colour', value: 'Green' } as Colour,
//   Blue: { type: 'colour', value: 'Blue' } as Colour,
// } as const;

// const Orientations = {
//   Top: { type: 'orientation', value: 'Top' } as Orientation,
//   Bottom: { type: 'orientation', value: 'Bottom' } as Orientation,
//   Left: { type: 'orientation', value: 'Left' } as Orientation,
//   Right: { type: 'orientation', value: 'Right' } as Orientation,
//   Front: { type: 'orientation', value: 'Front' } as Orientation,
//   Back: { type: 'orientation', value: 'Back' } as Orientation,
// } as const;

// type FaceType = Colour | Orientation;

// function getFace(face: FaceType): void {
//   switch (face.type) {
//     case 'colour':
//       console.log('Getting face by colour:', face.value);
//       // Handle colour logic here
//       break;
//     case 'orientation':
//       console.log('Getting face by orientation:', face.value);
//       // Handle orientation logic here
//       break;
//     default:
//       console.error('Invalid face type');
//   }
// }

// // Example usage
// getFace(Colours[COLOURS[COLOURS.White]]);
// getFace(Orientations[ORIENTATIONS[ORIENTATIONS.Top]]);

// /* istanbul ignore file */

// import { CubeState } from '../src/cube';
// import { Cube } from '../src/cube/Cube';
// import { ICube } from '../src/cube/ICube';
// import { CubeRotationDirection } from '../src/cube/lib';
// import { COLOURS } from '../src/lib/colours';
// import { newCubeState } from '../src/lib/factory';
// import { cubeExample, showCubeDetails } from './lib';

// const cubeState: CubeState = newCubeState();
// const _cube: ICube = new Cube(cubeState);

// // Create a CubeStateMemo
// // Create a face for an axis!
// // Create a face for a colour!

// // console.log(Symbol.); // true
// // cubeExample(
// //   'Working with cube faces',
// //   (cube: ICube) => {
// //     console.log('same', _cube === cube);
// //     // showCubeDetails(cube, 'Starting Cube');

// //     // cube.rotateLayerForColour(COLOURS.RED, CubeRotationDirection.ClockWise);

// //     // showCubeDetails(
// //     //   cube,
// //     //   'Cube rotation: <Side Red (Right), Direction ClockWise>',
// //     // );
// //   },
// //   _cube,
// // );
