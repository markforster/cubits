/* istanbul ignore file */

import { ICube } from '../src/cube/ICube';
import { cubeExample, showCubeDetails } from './lib';

cubeExample('Test: Do nothing to cube state', (cube: ICube) => {
  showCubeDetails(cube);
});
