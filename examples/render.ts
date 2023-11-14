/* istanbul ignore file */

import { CubeState } from '../src/cube';
import * as clc from 'cli-color';
import { COLOURS } from '../src/lib/colours';
import { colourForIndex } from '../src/lib/colourForIndex';
import { Vector } from '../src/cube/lib';

const n = null;
// const vIndeces = [[-1, 1, -1]];

// const vLookup = [[5, 5]];

const consoleColors: any = {
  [n]: 0,
  [COLOURS.WHITE]: 255,
  [COLOURS.YELLOW]: 226,
  [COLOURS.GREEN]: 84,
  [COLOURS.BLUE]: 33,
  [COLOURS.ORANGE]: 208,
  [COLOURS.RED]: 160,
};

const map: number[][] = [
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n, n, n, n],
];

const lookup = {
  // Top Face
  '-11-1-12-1': [5, 5],
  '01-102-1': [5, 4],
  '11-112-1': [5, 3],
  '-110-120': [4, 5],
  '010020': [4, 4],
  '110120': [4, 3],
  '-111-121': [3, 5],
  '011021': [3, 4],
  '111121': [3, 3],

  // Bottom Face
  '-1-1-1-1-2-1': [11, 5],
  '0-1-10-2-1': [11, 4],
  '1-1-11-2-1': [11, 3],
  '-1-10-1-20': [10, 5],
  '0-100-20': [10, 4],
  '1-101-20': [10, 3],
  '-1-11-1-21': [9, 5],
  '0-110-21': [9, 4],
  '1-111-21': [9, 3],

  // Front Face
  '-11-1-11-2': [6, 5],
  '01-101-2': [6, 4],
  '11-111-2': [6, 3],
  '-10-1-10-2': [7, 5],
  '00-100-2': [7, 4],
  '10-110-2': [7, 3],
  '-1-1-1-1-1-2': [8, 5],
  '0-1-10-1-2': [8, 4],
  '1-1-11-1-2': [8, 3],

  // Back Face
  '-111-112': [2, 5],
  '011012': [2, 4],
  '111112': [2, 3],
  '-101-102': [1, 5],
  '001002': [1, 4],
  '101102': [1, 3],
  '-1-11-1-12': [0, 5],
  '0-110-12': [0, 4],
  '1-111-12': [0, 3],

  // Left
  '-11-1-21-1': [5, 6],
  '-110-210': [4, 6],
  '-111-211': [3, 6],
  '-10-1-20-1': [5, 7],
  '-100-200': [4, 7],
  '-101-201': [3, 7],
  '-1-1-1-2-1-1': [5, 8],
  '-1-10-2-10': [4, 8],
  '-1-11-2-11': [3, 8],

  // Right
  '11-121-1': [5, 2],
  '110210': [4, 2],
  '111211': [3, 2],
  '10-120-1': [5, 1],
  '100200': [4, 1],
  '101201': [3, 1],
  '1-1-12-1-1': [5, 0],
  '1-102-10': [4, 0],
  '1-112-11': [3, 0],
};

export const render = (cubeState: CubeState): string => {
  cubeState.forEach((v: Vector, index: number) => {
    const key = `${v[0][0]}${v[0][1]}${v[0][2]}${v[1][0]}${v[1][1]}${v[1][2]}`;
    map[lookup[key][1]][lookup[key][0]] = lookup[key]
      ? colourForIndex(index)
      : null;
  });

  const s: any = map
    .map((c: number[]) => {
      return `${c
        .map((d: number) => {
          return clc.xterm(consoleColors[d])('█ ');
        })
        .reduce((v, s) => `${v}${s}`)}\n`;
    })
    .reduce((v, s) => `${v}${s}`);

  return `${s}`;
};
