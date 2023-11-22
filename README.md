# Rubiks Cube TypeScript Library

![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/markforster/c101d6d2eb46daca41a0d4139367c468/raw/test.json)
 [![Tests](https://github.com/markforster/cubits/actions/workflows/tests.yml/badge.svg)](https://github.com/markforster/cubits/actions/workflows/tests.yml)

This TypeScript library provides a representation of a Rubiks Cube and a set of functionalities to interact with it. The library is designed to be flexible and easily integrated into your projects. Below is a guide on how to work with the `ICube` interface and interact with a Rubiks Cube instance.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Initializing a Rubiks Cube](#initializing-a-rubiks-cube)
  - [Checking the Cube's State](#checking-the-cubes-state)
  - [Rotating a Cube Layer](#rotating-a-cube-layer)
  - [Rotating the Cube](#rotating-the-cube)
  - [Deriving colour information from the cubestate](#deriving-colour-information-from-the-cubestate)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @markforster/cubits
```

## Usage

### Initializing a Rubiks Cube

```typescript
import { Cube, ICube } from '@markforster/cubits';

const cube: ICube = new Cube();
```

### Checking the Cube's State

```typescript
import { COLOURS, ICube, AxisVertex } from '@markforster/cubits';

const cube: ICube = new Cube();

console.log(`Solved for colour ${COLOURS[COLOURS.WHITE]}:`, cube.solved(COLOURS.WHITE));
console.log(`Solved for colour ${COLOURS[COLOURS.RED]}:`, cube.solved(COLOURS.RED));
console.log(`Solved for colour ${COLOURS[COLOURS.BLUE]}:`, cube.solved(COLOURS.BLUE));
console.log(`Solved for ALL:`, cube.solved());
```

### Rotating a Cube Layer

```typescript
import { CubeRotationDirection, ICube, COLOURS } from '@markforster/cubits';

const cube: ICube = new Cube();

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);
```

### Rotating the Cube

```typescript
import { Cube, ICube, AxisVertex, CubeRotationDirection } from "@markforster/cubits"

const cube: ICube = new Cube();
cube.rotate(AxisVertex.PITCH, CubeRotationDirection.ClockWise);
```

### Overriding the cubes state

The Cube uses an internal property called state to manage the information about the position and facing direction of a cubes cubits. This information is stored as an array of paired vertices [Vertex, Vertex].

An instance of a cube can be created passing a CubeState to its constructor allowing you to see changes made to the cubes representation via the ICube interface. 

> [!CAUTION]
> Cubestate is intentionally hidden within a Cube instance. Work is ongoing to expose cubestate via its private property as readonly but this feature is yet to be added. Caution should be taken directly accessing the cube state as changes to the inner Vertices could cause features to break.

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

### Deriving colour information from the cubestate

Starting with a new CubeState instance and Cube Instance we can get the colour of all of the cubits of a given face colour using a combination of a few methods available via the module.
```typescript
const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);
```

We'd start by getting the layer normal for a colour. The layer normal is the Vertex that specifies the direction of a cubit and is the second part of a cubits complimentary pair.

```typescript
const colour: COLOURS = COLOURS.BLUE;
const lnfc: Vertex = layerNormalForColour(cubeState, colour);
```

For a default cubestate, calling `layerNormalForColour` passing the colour `COLOURS.BLUE` will return a `Vertex` `[0, 0, 2]`. This is because by default the BLUE face of a new cube is at the back of the cube model.

Now that we have the normal for the Blue face of the cube we can query `indecesForNormal` passing the normal Vertex to get a list of indices of all cubits that match this normal.
```typescript
const ifn: number[] = indecesForNormal(cubeState, lnfc);
```

`indecesForNormal` will return an array of indices that match the normal we passed to it. With the indices we can make a call to `colourForIndex` for each and get the corresponding `COLOURS` enum.

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
  indecesForNormal,
  Vertex,
  colourForIndex
} from '@markforster/cubits';

const logColoursForColourToConsole = (
  cubeState: CubeState,
  colour: COLOURS,
) => {
  const lnfc: Vertex = layerNormalForColour(cubeState, colour);
  const ifn: number[] = indecesForNormal(cubeState, lnfc);
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

## License

This project is licensed under the [MIT License](LICENSE).
