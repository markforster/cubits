/* istanbul ignore file */
import { Cube } from '../../src/cube/Cube';
import { ICube } from '../../src/cube/ICube';
import { COLOURS } from '../../src/lib/colours';
import { render } from './../render';
// eslint-disable-next-line no-var, @typescript-eslint/no-var-requires
var Table = require('cli-table3');
import * as clc from 'cli-color';
import { ValuesForEnum, KeysForEnum } from '../../src/lib/enums';

export const consoleColors: any = {
  [COLOURS.WHITE]: 255,
  [COLOURS.YELLOW]: 226,
  [COLOURS.GREEN]: 84,
  [COLOURS.BLUE]: 33,
  [COLOURS.ORANGE]: 208,
  [COLOURS.RED]: 160,
};

export const StringIsNumber = (value: any) => isNaN(Number(value)) === false;
export const NotStringIsNumber = (value: any) => isNaN(Number(value)) === true;

export const showCubeDetails = (cube: ICube, title?: string) => {
  title && console.log(`> ${title}`);
  const cls: number[] = ValuesForEnum(COLOURS).map((c) => c);

  const table = new Table({
    head: ['', 'All']
      .concat(KeysForEnum(COLOURS))
      .map((_c, i) => clc.xterm(consoleColors[`${cls[i - 2]}`])(_c)),
  });

  table.push(
    ['solved', clc.xterm(cube.solved() ? 10 : 9)(cube.solved())].concat(
      ValuesForEnum(COLOURS).map(
        (c) => `${clc.xterm(cube.solved(c) ? 10 : 9)(cube.solved(c))}`,
      ),
    ),
  );

  console.log(render(cube.state, 1));
  console.log(`${table.toString()}\n`);
};

type CallbackFunction = (cube: ICube) => void;

export const cubeExample = (
  title: string,
  callback: CallbackFunction,
  cube?: ICube,
) => {
  // console.clear();
  const titleString = `Example : ${title} `;

  console.log('\n');
  console.log(clc.xterm(11)(`-`.repeat(titleString.length + 2)));
  console.log(` ${clc.xterm(13)(titleString)}`);
  console.log(clc.xterm(11)(`-`.repeat(titleString.length + 2)));

  callback(cube || new Cube());

  console.log(`${clc.xterm(11)(`-`.repeat(`Example : ${title} `.length))}`);
};
