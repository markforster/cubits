import { CubeState } from "../cube";
import { Vertex, RotationAngle } from "../cube/lib";
import { rotateVectorsAtindices } from ".";
import { indicesForvertices } from "./indicesForvertices";

export const rotateLayerForVertex = (
  cubeState: CubeState,
  vertex: Vertex,
  rotationAxis: Vertex,
  angle: RotationAngle,
) => {
  const layerVertex = vertex.map((v) => (v === 0 ? undefined : v)) as Vertex;
  const indices: number[] = indicesForvertices(cubeState, layerVertex);
  rotateVectorsAtindices(cubeState, indices, angle, rotationAxis);
};
