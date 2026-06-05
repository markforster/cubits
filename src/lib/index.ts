export { PrimaryUnit } from './primaryUnit';
export { AxisVertex, LayersVertex, NormalsVertex } from './vectors';

export { arrayEquals } from './arrayEquals';

// export { colourForIndex } from "./colourForIndex";

export { countNonZeroElements as zeroCount } from './countNonZeroElements';

export { isCorner } from './isCorner';

export { isEdge } from './isEdge';

export { isCenter } from './isCenter';

// export { primaryUnit } from "./primaryUnit";

export { indicesForNormal } from './indicesForNormal';
export { rotateVectorsAtindices } from './rotateVectorsAtindices';

// This can help us get all vectors of a cube layer
/*
  Goal : Get the indices of all vertices that are on the same layer

  1) Get the primary unit. [ 0, 1, 0 ] would be all that are in the top layer
  2) Get all vectors that share this primary unit!
  3) we should have the indices!
*/
// export { indicesForverticesInLayer } from './indicesForverticesInLayer';
