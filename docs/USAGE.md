# Usage here

## Table of Contents

- [Terminology](#terminology)
- [Usage](#usage)
  - [Initializing a Rubiks Cube](#initializing-a-rubiks-cube)
  - [Checking the Cube's Solved State](#checking-the-cubes-solved-state)
  - [Rotating a Cube Layer](#rotating-a-cube-layer)
  - [Rotating the Cube](#rotating-the-cube)
  - [Deriving colour, indices, orientation and normal information from the cubestate](#deriving-colour-indices-orientation-and-normal-information-from-the-cubestate)
  - [Deriving colour information from the cubestate pre 0.0.12](#deriving-colour-information-from-the-cubestate-pre-0012)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Usage

### Terminology

#### Preface
The Rubiks cube module is underpinned by an array of vectors that hold the state of the cubes 6 faces. Each face is represented by 9 Vectors, in total 54 vectors. Each vector is composed of a vertex pair that hold its position and orientation. The values stored in its position vertex will range -1 | 0 | 1 and its orientation vertex -2 | 0 | 2

The colour of the face is determined by its index in this array. This was a concious decision to implement it this way to reduce the information that needs to be stored about the cube given the the order of the vectors need never be changed and so the colours can be considered an emergent property of the cube. 

> [!CAUTION]
> The implicaton of this however is that the face colours are always implied so changing cubestate position directly will confuse the algorithms!

A face is considered an aggregation of all vectors that reside at any given position in the cubes state and will comprise of 9 vectors. A layer is considered an aggreation of all vectors that reside at any given orientation in the cubes state and will comprise of 18 vectors.

#### Language

A Face represents the face of a cube comprising of the 9 smaller faces referred to as cubelets that make up its surface.
A Layer represents the 9 cubelets of a face plus the 12 cubelets relative to the faces edge.

Colours represent the 6 colours that any cubelet can take on.
Orientation represents both the direction a cubelet is facing (UP, DOWN, BACK, FRONT, LEFT and RIGHT) or the direction a cube can rotate (PITCH, ROLL and YAW).

### Working with the Cube

#### Initializing a Rubiks Cube

An instance of a cube can be created by simply importing the Cube class and creating an instance.

```typescript
import { Cube, ICube } from '@markforster/cubits';

const cube: ICube = new Cube();
```

#### Checking the Cube's Solved State

The solved state of any face and the cube as a whole can be checked with a single method 'solved'.

```typescript
import { COLOURS, ICube, AxisVertex } from '@markforster/cubits';

const cube: ICube = new Cube();

console.log(`Solved for colour ${COLOURS[COLOURS.WHITE]}:`, cube.solved(COLOURS.WHITE));
console.log(`Solved for colour ${COLOURS[COLOURS.RED]}:`, cube.solved(COLOURS.RED));
console.log(`Solved for colour ${COLOURS[COLOURS.BLUE]}:`, cube.solved(COLOURS.BLUE));
console.log(`Solved for ALL:`, cube.solved());
```

By default the cube will be in a solved state for all faces. By rotating a cube layer you can change the state of the cube to unsolved however some of the faces may still be in a solved state.

#### Rotating a Cube Layer

The cube interface provide a method for rotating the individual layers of a cube via its `rotateLayerForColour` method. The method accepts 1 of the 6 colours from the `COLOURS` enum: WHITE, YELLOW, BLUE, GREEN, RED and ORANGE; and a `CubeRotationDirection` of either ClockWise or AntiClockWise.

```typescript
import { CubeRotationDirection, ICube, COLOURS } from '@markforster/cubits';

const cube: ICube = new Cube();

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);
```

#### Rotating the Cube

The cubes orientation can be set through rotation by providing the axis to rotate and the direction of rotation.

```typescript
import { Cube, ICube, AxisVertex, CubeRotationDirection } from "@markforster/cubits"

const cube: ICube = new Cube();
cube.rotate(AxisVertex.PITCH, CubeRotationDirection.ClockWise);
```

#### Overriding the cubes state

The Cube uses an internal property called state to manage the information about the position and orientation of a cube and its cubelets. This information is stored as an array of vertice pairs [Vertex, Vertex].

An instance of a cube can be created passing a CubeState to its constructor allowing you to see changes made to the state directly from manipulate through a cubes ICube interface.

> [!CAUTION]
> Cubestate is intentionally hidden within a Cube instance. Work is ongoing to expose cubestate via its private property as readonly but this feature is yet to be added. Caution should be taken directly accessing the cube state as changes to the inner Vertices could cause features to break. See details here [src/cube/index.ts](../blob/master/src/cube/index.ts).

```typescript
import {
  Cube,
  ICube,
  AxisVertex,
  CubeRotationDirection,
  CubeState,
  newCubeState,
} from '@markforster/cubits';

const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);

// Output the current cubestate
console.log(cubeState);

cube.rotate(AxisVertex.PITCH, CubeRotationDirection.ClockWise);

// Output the cubestate after the cube has been rotated
console.log(cubeState);
```

#### Deriving colour, indices, orientation and normal information from the cubestate

As of v0.0.12 the module now supports the addition of an IFace interface that holds methods for querying the state of individual cube faces.

The cube interface now provides a method `face` that accepts a `FaceOption` enum (TOP, BOTTOM, BACK, FRONT, LEFT, RIGHT, WHITE, YELLOW, BLUE, GREEN, ORANGE and RED). Passing any one of these enums will return an instance of IFace that correlates to the option and the cubes current cubestate.

##### Passing a Colour
Passing a colour option will return a face that will track the center cubelet matching the colour specified. This can be useful when the cubes orientation changes and or layers from any other side of the cube are rotated to align with the chosen face.

##### Passing an Orientation
Passing an orientation will return a face that will always be locked to that orientation specifed and can be useful when wanting to derive information about what colours are now attributed to that face following any rotation of the cube or its layers. For example if the Face represents the top of the cube, the top face of the cube is white and the whole cube is rotated forward by its pitch then the colours for the top face will now be green. The face will return the top most facing information regardless of how the cube or its layers are rotated.

##### The IFace interface
The `IFace` interface can provide information about the faces: Colours, Position, Normals and Indices. The data returned is intentionally made as a copy of the cubestate to prevent the possibility of directly modifying these values and breaking the cubes state. The values are derived dynamically and can be expected to change following any cube or layer rotation allowing you to maintain a reference to the face without requesting another instance from the cube. 

An example may look like this:

```typescript
import { COLOURS } from '@markforster/cubits/';
import { IFace } from '@markforster/cubits/';
import { faceForFaceOption } from '@markforster/cubits/';
import { CubeState } from '@markforster/cubits/';
import { Cube } from '@markforster/cubits/';
import { newCubeState } from '@markforster/cubits/';
import { ICube } from '@markforster/cubits/';
import { CubeRotationDirection } from '@markforster/cubits/';
import { FaceOption } from '@markforster/cubits/';
import { AxisVertex } from '@markforster/cubits//';

const renderColours = (colours: COLOURS[] | undefined, title: string) => {
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

cube.rotate(AxisVertex.PITCH, CubeRotationDirection.ClockWise);

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);

renderColours(colourFace.colours, 'colourFace.colours');
renderColours(normalFace.colours, 'normalFace.colours');

console.log('colourFace.normals', colourFace.normals);
```

If for any reason you'd prefer to store a direct reference to the underlying cubestate and its vectors and vertices see the [next section](#deriving-colour-information-from-the-cubestate-pre-0012).

#### Deriving colour information from the cubestate pre 0.0.12

Starting with a new CubeState instance and Cube Instance we can get the colour of all of the cubelets of a given face colour using a combination of a few methods available via the module.

```typescript
const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);
```

We'd start by getting the layer normal for a colour. The layer normal is the Vertex that specifies the direction of a cubelet and is the second part of a cubelets complimentary pair.

```typescript
const colour: COLOURS = COLOURS.BLUE;
const lnfc: Vertex = layerNormalForColour(cubeState, colour);
```

For a default cubestate, calling `layerNormalForColour` passing the colour `COLOURS.BLUE` will return a `Vertex` `[0, 0, 2]`. This is because by default the BLUE face of a new cube is at the back of the cube model.

Now that we have the normal for the Blue face of the cube we can query `indicesForNormal` passing the normal Vertex to get a list of indices of all cubelets that match this normal.
```typescript
const ifn: number[] = indicesForNormal(cubeState, lnfc);
```

`indicesForNormal` will return an array of indices that match the normal we passed to it. With the indices we can make a call to `colourForIndex` for each and get the corresponding `COLOURS` enum.

```typescript
const cfi: COLOURS[] = ifn.map((i: number) => {
  return colourForIndex(i);
});
```

We should now have an array of 9 `COLOURS` outputting the console like so:
```typescript
console.log(
  `Colours for ${COLOURS[colour]}`,
  cfi.map((c: COLOURS) => COLOURS[c]),
);
```

A complete sample could look like this
```typescript
import {
  Cube,
  ICube,
  CubeRotationDirection,
  CubeState,
  newCubeState,
  COLOURS,
  layerNormalForColour,
  indicesForNormal,
  Vertex,
  colourForIndex
} from '@markforster/cubits';

const logColoursForColourToConsole = (
  cubeState: CubeState,
  colour: COLOURS,
) => {
  const lnfc: Vertex = layerNormalForColour(cubeState, colour);
  const ifn: number[] = indicesForNormal(cubeState, lnfc);
  const cfi: COLOURS[] = ifn.map((i: number) => colourForIndex(i));

  console.log(
    `Colours for ${COLOURS[colour]}`,
    cfi.map((c: COLOURS) => COLOURS[c]),
  );
};

const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);

logColoursForColourToConsole(cubeState, COLOURS.BLUE);

cube.rotateLayerForColour(COLOURS.WHITE, CubeRotationDirection.ClockWise);

logColoursForColourToConsole(cubeState, COLOURS.BLUE);
```
and our console output would look like this
```console
Colours for BLUE [
  'BLUE', 'BLUE',
  'BLUE', 'BLUE',
  'BLUE', 'BLUE',
  'BLUE', 'BLUE',
  'BLUE'
]
Colours for BLUE [
  'BLUE',   'BLUE',
  'BLUE',   'BLUE',
  'BLUE',   'BLUE',
  'ORANGE', 'ORANGE',
  'ORANGE'
]
```
## Examples

Check the [examples](./examples) directory for additional usage scenarios and demonstrations.
