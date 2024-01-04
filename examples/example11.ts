import { FaceColors, IFace } from '../src/cube/IFace';
import { COLOURS } from '../src/lib/colours';
import { ORIENTATIONS } from '../src/lib/orientations';
import { faceForFaceOption } from '../src/lib/face/faceForFaceOption';
import { CubeState } from '../src/cube';
import { Cube } from '../src/cube/Cube';
import { newCubeState } from '../src/lib/factory';
import { ICube } from '../src/cube/ICube';
import { CubeRotationDirection } from '../src/cube/lib';
import { faceOptionForColour } from '../src/lib/face/faceOptionForColour';
import { faceOptionForOrientation } from '../src/lib/face/faceOptionForOrientation';
import { FaceOption } from '../src/lib/face';
import { Axis } from '../src/lib/rotate';

console.log(FaceOption[faceOptionForColour(COLOURS.BLUE)]);
console.log(FaceOption[faceOptionForOrientation(ORIENTATIONS.BACK)]);

const renderColours = (colours: FaceColors | undefined, title: string) => {
  if (colours !== undefined) {
    console.log(
      title,
      colours.map((c: COLOURS) => COLOURS[c]),
    );
  }
};

const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);

const normalFace: IFace = faceForFaceOption(cubeState, FaceOption.TOP);
const colourFace: IFace = faceForFaceOption(cubeState, FaceOption.WHITE);

console.log('IFace > FaceOption.WHITE', colourFace.colours);
console.log('IFace > FaceOption.TOP', normalFace.colours);

renderColours(colourFace.colours, 'colourFace.colours');
renderColours(normalFace.colours, 'normalFace.colours');

cube.rotate(Axis.X, CubeRotationDirection.ClockWise);

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);

renderColours(colourFace.colours, 'colourFace.colours');
renderColours(normalFace.colours, 'normalFace.colours');

console.log('colourFace.normals', colourFace.normals);
