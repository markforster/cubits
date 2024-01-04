import { Tokeniser } from './../types';
import * as orientate from './orientate';
import * as rotateAll from './rotateAll';
import * as rotateFaces from './rotateFaces';
import * as rotateSections from './rotateSections';

// TODO: This needs to be tested!
export const tokenisers: Tokeniser[] = [
  {
    regex: orientate.regex,
    turnType: orientate.turntype,
    callback: orientate.action,
  },
  {
    regex: rotateAll.regex,
    turnType: rotateAll.turntype,
    callback: rotateAll.action,
  },
  {
    regex: rotateSections.regex,
    turnType: rotateSections.turntype,
    callback: rotateSections.action,
  },
  {
    regex: rotateFaces.regex,
    turnType: rotateFaces.turntype,
    callback: rotateFaces.action,
  },
];
