import { Vertex } from '../cube/lib';

export const maskVerticesToBitArray = (vertex: Vertex): number => {
  return vertex
    .slice()
    .reverse()
    .reduce((_pv: number, _cv: number, _i: number) => _pv + (_cv << _i), 0x00);
};
