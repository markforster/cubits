import { compareArray } from "..";
import { CubeState } from "../../cube";
import { RotationAngle, Vertex } from "../../cube/lib";
import { AxisVertex } from "..";
import { rotateLayerForVertex } from "../rotateLayerForVertex";
import { newCubeState } from "../factory";
import { expectDefaultCubeState } from "./lib";

describe("rotateLayerForVertex", () => {
  it("rotates the top layer when given [0,1,0]", () => {
    const cubeState: CubeState = newCubeState();

    expectDefaultCubeState(cubeState);

    rotateLayerForVertex(
      cubeState,
      [0, 1, 0] as Vertex,
      AxisVertex.YAW,
      RotationAngle.ClockWise,
    );

    expect(compareArray(cubeState[0][0], [-1, 1, 1])).toBe(true);
    expect(compareArray(cubeState[1][0], [-1, 1, 0])).toBe(true);
    expect(compareArray(cubeState[2][0], [-1, 1, -1])).toBe(true);
  });
});
