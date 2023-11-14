/* eslint-disable prettier/prettier */
/*
  Understanding the Structure and Correlation of 3D Vertex and Vector Data in Rubik's Cube Representation

  Introduction:
  A CubeState is a representation of a Rubik's Cube, a popular 3D combination puzzle. 
  The Rubik's Cube is composed of small cubits, and each cubie has six faces, each with a 
  specific color. To understand the cube's state, we need to represent the locations and 
  orientations of these cubits in space. The given data organizes this information using an 
  array of arrays, capturing the spatial relationships between the cubits through vertices 
  and vectors.

  The Spatial Representation:
  The data contains an outer array, consisting of 54 inner arrays. Each inner array holds 
  two further arrays, representing vertices and vectors. The first most inner array (vertex) 
  represents a point in 3D space, denoting the cubie's location in the Rubik's Cube. The 
  second most inner array (vector) is also a point in 3D space, and it represents the 
  direction the cubie is facing. Combining these two arrays (vertex and vector) creates a 
  complete spatial representation of each cubie's location and orientation.

  Cube Layer and Directional Correlation:
  The array follows a specific order that ensures a coherent representation of the Rubik's 
  Cube's layers and the orientations of the cubits. The arrangement of vertices and vectors 
  captures the relationship between adjacent cubits within the same layer.

  a) Top and Bottom Layers:
  The first 18 inner arrays represent the top and bottom layers of the Rubik's Cube. Each 
  layer consists of three rows, with three cubits in each row. The vectors of the cubits 
  on the top layer point upward, while those on the bottom layer point downward.

  b) Front and Back Layers:
  The next 18 inner arrays represent the front and back layers of the Rubik's Cube. Each 
  layer consists of three columns, with three cubits in each column. The vectors of the 
  cubits in the front layer point towards the viewer, while those in the back layer point 
  away.

  c) Left and Right Layers:
  The final 18 inner arrays represent the left and right layers of the Rubik's Cube. Each 
  layer consists of three columns, with three cubits in each column. The vectors of the 
  cubits in the left layer point to the left, while those in the right layer point to the 
  right.

  The Importance of Data Structure:
  The specific structure of the data is crucial for accurately representing the spatial 
  relationship between cubits in the Rubik's Cube. The vertex and vector information within 
  each inner array allows us to precisely locate and orient each cubie. By arranging the 
  inner arrays in a consistent pattern, we ensure that the relationships between cubits 
  in the same layer are correctly represented, enabling us to manipulate and solve the 
  Rubik's Cube using algorithms and heuristics.

  Conclusion:

  The provided data represents a Rubik's Cube in a structured manner, capturing the 
  spatial relationships between cubits using vertices and vectors. The arrangement of 
  the inner arrays correlates with the various layers and orientations of the cubits, 
  making it possible to accurately represent and manipulate the Rubik's Cube. Understanding 
  this data structure is crucial for solving the Rubik's Cube efficiently and exploring 
  its various algorithms and patterns.
*/
import { Vector } from './lib';

/**
 * Represents the state of a Rubik's Cube as an array of vectors.
 * Understanding the Structure and Correlation of 3D Vertex and Vector Data in Rubik's Cube Representation

* Introduction:
* A CubeState is a representation of a Rubik's Cube, a popular 3D combination puzzle.
* The Rubik's Cube is composed of small cubits, and each cubie has six faces, each with a
* specific color. To understand the cube's state, we need to represent the locations and
* orientations of these cubits in space. The given data organizes this information using an
* array of arrays, capturing the spatial relationships between the cubits through vertices
* and vectors.

* The Spatial Representation:
* The data contains an outer array, consisting of 54 inner arrays. Each inner array holds
* two further arrays, representing vertices and vectors. The first most inner array (vertex)
* represents a point in 3D space, denoting the cubie's location in the Rubik's Cube. The
* second most inner array (vector) is also a point in 3D space, and it represents the
* direction the cubie is facing. Combining these two arrays (vertex and vector) creates a
* complete spatial representation of each cubie's location and orientation.

* Cube Layer and Directional Correlation:
* The array follows a specific order that ensures a coherent representation of the Rubik's
* Cube's layers and the orientations of the cubits. The arrangement of vertices and vectors
* captures the relationship between adjacent cubits within the same layer.

* a) Top and Bottom Layers:
* The first 18 inner arrays represent the top and bottom layers of the Rubik's Cube. Each
* layer consists of three rows, with three cubits in each row. The vectors of the cubits
* on the top layer point upward, while those on the bottom layer point downward.

* b) Front and Back Layers:
* The next 18 inner arrays represent the front and back layers of the Rubik's Cube. Each
* layer consists of three columns, with three cubits in each column. The vectors of the
* cubits in the front layer point towards the viewer, while those in the back layer point
* away.

* c) Left and Right Layers:
* The final 18 inner arrays represent the left and right layers of the Rubik's Cube. Each
* layer consists of three columns, with three cubits in each column. The vectors of the
* cubits in the left layer point to the left, while those in the right layer point to the
* right.

* The Importance of Data Structure:
* The specific structure of the data is crucial for accurately representing the spatial
* relationship between cubits in the Rubik's Cube. The vertex and vector information within
* each inner array allows us to precisely locate and orient each cubie. By arranging the
* inner arrays in a consistent pattern, we ensure that the relationships between cubits
* in the same layer are correctly represented, enabling us to manipulate and solve the
* Rubik's Cube using algorithms and heuristics.

* Conclusion:
* The provided data represents a Rubik's Cube in a structured manner, capturing the
* spatial relationships between cubits using vertices and vectors. The arrangement of
* the inner arrays correlates with the various layers and orientations of the cubits,
* making it possible to accurately represent and manipulate the Rubik's Cube. Understanding
* this data structure is crucial for solving the Rubik's Cube efficiently and exploring
* its various algorithms and patterns.
*
* @public
*/
export type CubeState = [
  Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector,
  Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector,
  Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector,
  Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector,
  Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector,
  Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector, Vector
];

