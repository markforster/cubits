/* istanbul ignore file */

import { CubeState } from '../src/cube';
import * as clc from 'cli-color';
import { COLOURS } from '../src/lib/colours';
import { colourForIndex } from '../src/lib/colourForIndex';
import { Vector } from '../src/cube/lib';

const n = null;

const consoleColors: any = {
  [n]: 0,
  [COLOURS.WHITE]: 255,
  [COLOURS.YELLOW]: 226,
  [COLOURS.GREEN]: 84,
  [COLOURS.BLUE]: 33,
  [COLOURS.ORANGE]: 208,
  [COLOURS.RED]: 160,
};

enum FACE {
  TOP = 0,
  FRONT = 1,
  BOTTOM = 2,
  BACK = 3,
  LEFT = 4,
  RIGHT = 5,
}

const FL = ['U', 'F', 'D', 'B', 'L', 'R'];

const map: number[][] = [
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
];

const map2: number[][] = [
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, FACE.BACK, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, FACE.TOP, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, FACE.LEFT, n, n, FACE.FRONT, n, n, FACE.RIGHT, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
  [n, n, n, n, FACE.BOTTOM, n, n, n, n],
  [n, n, n, n, n, n, n, n, n],
];

const MSYM = {};

const lookup = {
  // Top Face
  '-11-1-12-1': [3, 5],
  '01-102-1': [4, 5],
  '11-112-1': [5, 5],
  '-110-120': [3, 4],
  '010020': [4, 4],
  '110120': [5, 4],
  '-111-121': [3, 3],
  '011021': [4, 3],
  '111121': [5, 3],

  // Front Face - Green by derfault
  '-11-1-11-2': [3, 6],
  '01-101-2': [4, 6],
  '11-111-2': [5, 6],
  '-10-1-10-2': [3, 7],
  '00-100-2': [4, 7],
  '10-110-2': [5, 7],
  '-1-1-1-1-1-2': [3, 8],
  '0-1-10-1-2': [4, 8],
  '1-1-11-1-2': [5, 8],

  // Bottom Face - Yellow by default
  '-1-1-1-1-2-1': [3, 9],
  '0-1-10-2-1': [4, 9],
  '1-1-11-2-1': [5, 9],
  '-1-10-1-20': [3, 10],
  '0-100-20': [4, 10],
  '1-101-20': [5, 10],
  '-1-11-1-21': [3, 11],
  '0-110-21': [4, 11],
  '1-111-21': [5, 11],

  // Back Face - Blue by default
  '-111-112': [3, 2],
  '011012': [4, 2],
  '111112': [5, 2],
  '-101-102': [3, 1],
  '001002': [4, 1],
  '101102': [5, 1],
  '-1-11-1-12': [3, 0],
  '0-110-12': [4, 0],
  '1-111-12': [5, 0],

  // Left - Orange by default
  '-11-1-21-1': [2, 6],
  '-110-210': [1, 6],
  '-111-211': [0, 6],
  '-10-1-20-1': [2, 7],
  '-100-200': [1, 7],
  '-101-201': [0, 7],
  '-1-1-1-2-1-1': [2, 8],
  '-1-10-2-10': [1, 8],
  '-1-11-2-11': [0, 8],

  // Right - Red by default
  '11-121-1': [6, 6],
  '110210': [7, 6],
  '111211': [8, 6],
  '10-120-1': [6, 7],
  '100200': [7, 7],
  '101201': [8, 7],
  '1-1-12-1-1': [6, 8],
  '1-102-10': [7, 8],
  '1-112-11': [8, 8],
};

export const render = (cubeState: CubeState, padding?: number): string => {
  cubeState.forEach((v: Vector, index: number) => {
    const key = `${v[0][0]}${v[0][1]}${v[0][2]}${v[1][0]}${v[1][1]}${v[1][2]}`;
    if (lookup[key]) {
      map[lookup[key][1]][lookup[key][0]] = lookup[key]
        ? colourForIndex(index)
        : null;
    }
  });

  const s: any = map
    .map((c: number[], ci: number) => {
      return `${' '.repeat(padding || 0)}${c
        .map((d: number, di) => {
          const ltr = map2[ci][di] !== null ? `${FL[map2[ci][di]]} ` : '█ ';
          const bgc = map2[ci][di] !== null ? 0 : 0;
          const fgc =
            map2[ci][di] !== null ? consoleColors[d] : consoleColors[d];

          // return clc.xterm(consoleColors[d])('█ ');
          return clc.xterm(fgc).bgXterm(bgc)(ltr);
        })
        .reduce((v, s) => `${v}${s}`)}${ci !== map.length - 1 ? '\n' : ''}`;
    })
    .reduce((v, s) => `${v}${s}`);

  return `${'\n'.repeat(padding || 0)}${s}${'\n'.repeat(padding || 0)}`;
};
