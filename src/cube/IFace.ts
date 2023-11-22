import { COLOURS } from '../lib/colours';
import { FaceOption } from '../lib/face';
import { Vertex } from './lib';

export type FaceColors = COLOURS[];
export type FaceNormals = Vertex[];
export type FacePositions = Vertex[];
export interface IFace {
  readonly option: FaceOption;
  readonly colours: FaceColors;
  readonly indices: number[];
  readonly normals: FaceNormals;
  readonly positions: FacePositions;
}
