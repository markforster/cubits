/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { COLOURS } from '../src/lib/colours';
import { ValuesForEnum, cubeExample, showCubeDetails } from './lib';

type Callback = () => void;

const loopForRandomLength = (min: number, max: number, callback: Callback) => {
  const _max = Math.ceil(Math.random() * max) + min;

  let count = 0;

  while (count < _max) {
    callback();
    count++;
  }
};

cubeExample(`Not very clever shuffling of cube`, (cube: ICube) => {
  showCubeDetails(cube, 'Initial state');

  loopForRandomLength(5, 50, () => {
    const colours = ValuesForEnum(COLOURS);
    const directions = ValuesForEnum(CubeRotationDirection);

    const colour = colours[Math.floor(Math.random() * colours.length)];
    const direction = directions[Math.floor(Math.random() * directions.length)];

    cube.rotateLayerForColour(colour, direction);
  });

  showCubeDetails(cube, 'Shuffled State');
});
