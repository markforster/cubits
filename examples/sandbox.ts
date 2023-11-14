/* istanbul ignore file */

import { Cube } from '../src/cube/Cube';
import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { COLOURS } from '../src/lib/colours';
import { render } from './render';

console.clear();

console.log(`Testing rubiks cube with matrix`);
console.log(`-------------------------------`);

const cube: ICube = new Cube();
const colWhite: COLOURS = COLOURS.WHITE;
const colRed: COLOURS = COLOURS.RED;
const colBlue: COLOURS = COLOURS.BLUE;

console.log(`Solved for colour ${COLOURS[colWhite]} :`, cube.solved(colWhite));
console.log(`Solved for colour ${COLOURS[colRed]} :`, cube.solved(colRed));
console.log(`Solved for colour ${COLOURS[colBlue]} :`, cube.solved(colBlue));
console.log(`Solved for ALL :`, cube.solved());
console.log(render(cube.state));

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);

console.log(`-------------------------------`);
console.log(`Solved for colour ${COLOURS[colWhite]} :`, cube.solved(colWhite));
console.log(`Solved for colour ${COLOURS[colRed]} :`, cube.solved(colRed));
console.log(`Solved for colour ${COLOURS[colBlue]} :`, cube.solved(colBlue));
console.log(`Solved for ALL :`, cube.solved());
console.log(render(cube.state));
