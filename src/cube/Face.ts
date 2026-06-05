import { CubeState } from './state';
import { colourForIndex } from '../lib/colourForIndex';
import { COLOURS } from '../lib/colours';
import { FaceOption, faceOrientationKeys, faceColourKeys } from '../lib/face';
import { colorForFaceOption } from '../lib/face/colorForFaceOption';
import { indicesForNormal } from '../lib/indicesForNormal';
import { orientationForFaceOption } from '../lib/face/orientationForFaceOption';
import { layerNormalForColour } from '../lib/layerVertexForColour';
import { NormalsVertex } from '../lib/vectors';
import { FaceColors, FaceNormals, IFace } from './IFace';
import { Vertex } from './lib';

export class Face implements IFace {
  private _option: FaceOption;
  private _cubeState: CubeState;

  private getFaceIndices(): number[] {
    if (faceColourKeys.includes(this._option)) {
      const lnfc: Vertex = layerNormalForColour(
        this._cubeState,
        colorForFaceOption(this._option),
      );
      return indicesForNormal(this._cubeState, lnfc);
    }

    if (faceOrientationKeys.includes(this._option)) {
      return indicesForNormal(
        this._cubeState,
        Object.values(NormalsVertex)[orientationForFaceOption(this._option)],
      );
    }
  }

  public get option(): FaceOption {
    return this._option;
  }

  public get colours(): FaceColors {
    if (faceColourKeys.includes(this._option)) {
      const colour: COLOURS = colorForFaceOption(this._option);

      const lnfc: Vertex = layerNormalForColour(this._cubeState, colour);
      const ifn: number[] = indicesForNormal(this._cubeState, lnfc);
      const cfi: COLOURS[] = ifn.map((i: number) => colourForIndex(i));

      return cfi;
    }

    if (faceOrientationKeys.includes(this._option)) {
      const ifn: number[] = indicesForNormal(
        this._cubeState,
        Object.values(NormalsVertex)[orientationForFaceOption(this._option)],
      );
      const cfi: COLOURS[] = ifn.map((i: number) => colourForIndex(i));
      return cfi;
    }
  }

  public get indices(): any {
    const ifn: number[] = this.getFaceIndices();
    return ifn.map((i: number) => i);
  }

  public get normals(): FaceNormals {
    const ifn: number[] = this.getFaceIndices();
    return ifn.map((i: number) => {
      return this._cubeState[i][1].map((ii: number) => ii) as Vertex;
    });
  }

  public get positions(): FaceNormals {
    const ifn: number[] = this.getFaceIndices();
    return ifn.map((i: number) => {
      return this._cubeState[i][0].map((ii: number) => ii) as Vertex;
    });
  }

  constructor(cubeState: CubeState, option: FaceOption) {
    this._cubeState = cubeState;
    this._option = option;
  }
}
