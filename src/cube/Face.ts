import { CubeState } from '.';
import { NormlasVertex, indecesForNormal } from '../lib';
import { colourForIndex } from '../lib/colourForIndex';
import { COLOURS } from '../lib/colours';
import { FaceOption, faceOrientationKeys, faceColourKeys } from '../lib/face';
import { colorForFaceOption } from '../lib/face/colorForFaceOption';
import { orientationForFaceOption } from '../lib/face/orientationForFaceOption';
import { layerNormalForColour } from '../lib/layerVertexForColour';
import { FaceColors, FaceNormals, IFace } from './IFace';
import { Vertex } from './lib';

export class Face implements IFace {
  private _option: FaceOption;
  private _cubeState: CubeState;
  // private _colour: COLOURS;
  // private _normal: Vertex;

  public get option(): FaceOption {
    return this._option;
  }

  public get colours(): FaceColors {
    if (faceColourKeys.includes(this._option)) {
      const colour: COLOURS = colorForFaceOption(this._option);

      const lnfc: Vertex = layerNormalForColour(this._cubeState, colour);
      const ifn: number[] = indecesForNormal(this._cubeState, lnfc);
      const cfi: COLOURS[] = ifn.map((i: number) => colourForIndex(i));

      return cfi;
    }

    if (faceOrientationKeys.includes(this._option)) {
      const ifn: number[] = indecesForNormal(
        this._cubeState,
        Object.values(NormlasVertex)[orientationForFaceOption(this._option)],
      );
      const cfi: COLOURS[] = ifn.map((i: number) => colourForIndex(i));
      return cfi;
    }
  }

  public get indeces(): any {
    if (faceColourKeys.includes(this._option)) {
      const lnfc: Vertex = layerNormalForColour(
        this._cubeState,
        colorForFaceOption(this._option),
      );
      const ifn: number[] = indecesForNormal(this._cubeState, lnfc);
      return ifn.map((i: number) => i);
    }

    if (faceOrientationKeys.includes(this._option)) {
      const ifn: number[] = indecesForNormal(
        this._cubeState,
        Object.values(NormlasVertex)[orientationForFaceOption(this._option)],
      );

      return ifn.map((i: number) => i);
    }
  }

  public get normals(): FaceNormals {
    if (faceColourKeys.includes(this._option)) {
      const lnfc: Vertex = layerNormalForColour(
        this._cubeState,
        colorForFaceOption(this._option),
      );
      const ifn: number[] = indecesForNormal(this._cubeState, lnfc);
      return ifn.map((i: number) => {
        return this._cubeState[i][1].map((ii: number) => ii) as Vertex;
      });
    }

    if (faceOrientationKeys.includes(this._option)) {
      const ifn: number[] = indecesForNormal(
        this._cubeState,
        Object.values(NormlasVertex)[orientationForFaceOption(this._option)],
      );
      return ifn.map((i: number) => {
        return this._cubeState[i][1].map((ii: number) => ii) as Vertex;
      });
    }
  }

  public get positions(): FaceNormals {
    if (faceColourKeys.includes(this._option)) {
      const lnfc: Vertex = layerNormalForColour(
        this._cubeState,
        colorForFaceOption(this._option),
      );
      const ifn: number[] = indecesForNormal(this._cubeState, lnfc);
      return ifn.map((i: number) => {
        return this._cubeState[i][0].map((ii: number) => ii) as Vertex;
      });
    }

    if (faceOrientationKeys.includes(this._option)) {
      const ifn: number[] = indecesForNormal(
        this._cubeState,
        Object.values(NormlasVertex)[orientationForFaceOption(this._option)],
      );
      return ifn.map((i: number) => {
        return this._cubeState[i][0].map((ii: number) => ii) as Vertex;
      });
    }
  }

  constructor(cubeState: CubeState, option: FaceOption) {
    this._cubeState = cubeState;
    this._option = option;
  }
}
