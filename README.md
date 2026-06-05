# Rubik's Cube TypeScript Library

![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/markforster/c101d6d2eb46daca41a0d4139367c468/raw/test.json)
[![Tests](https://github.com/markforster/cubits/actions/workflows/tests.yml/badge.svg)](https://github.com/markforster/cubits/actions/workflows/tests.yml)

`@markforster/cubits` is a TypeScript library for modelling and manipulating a Rubik's Cube. It provides a cube representation, rotation and orientation mechanics, face inspection helpers, and a notation operator that can execute standard cube notation against the current cube state.

For a deeper look at the cube model used by this library, see the [technical specification](https://homes.luddy.indiana.edu/stsher/files/Rubiks_Cube.pdf).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Create a Cube](#create-a-cube)
  - [Check Solved State](#check-solved-state)
  - [Rotate a Layer or the Whole Cube](#rotate-a-layer-or-the-whole-cube)
  - [Orient the Cube](#orient-the-cube)
  - [Inspect a Face](#inspect-a-face)
  - [Execute Cube Notation](#execute-cube-notation)
- [Further Reading](#further-reading)
- [Examples](#examples)
- [License](#license)

## Installation

```bash
npm install @markforster/cubits
```

## Usage

The README covers the main concepts. For fuller usage details, see [docs/USAGE.md](./docs/USAGE.md).

### Create a Cube

Create a new cube by instantiating `Cube`.

```typescript
import { Cube, ICube } from '@markforster/cubits';

const cube: ICube = new Cube();
```

### Check Solved State

You can check whether the whole cube is solved, or whether a specific colour face is solved.

```typescript
import { COLOURS, Cube, ICube } from '@markforster/cubits';

const cube: ICube = new Cube();

console.log(`Solved for ${COLOURS[COLOURS.WHITE]}:`, cube.solved(COLOURS.WHITE));
console.log(`Solved for ${COLOURS[COLOURS.BLUE]}:`, cube.solved(COLOURS.BLUE));
console.log('Solved overall:', cube.solved());
```

### Rotate a Layer or the Whole Cube

Use `rotateLayerForColour` to turn a face layer, and `rotate` to rotate the cube around one of its axes.

```typescript
import {
  Axis,
  COLOURS,
  Cube,
  CubeRotationDirection,
  ICube,
} from '@markforster/cubits';

const cube: ICube = new Cube();

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);
cube.rotate(Axis.X, CubeRotationDirection.ClockWise);
```

### Orient the Cube

Use `orientate` to move one face orientation into another. You can also lock a third orientation so it is preserved while the cube is reoriented.

```typescript
import { Cube, ICube, Orientation } from '@markforster/cubits';

const cube: ICube = new Cube();

cube.orientate(Orientation.TOP, Orientation.LEFT);
cube.orientate(Orientation.BACK, Orientation.FRONT, Orientation.LEFT);
```

### Inspect a Face

Use `face` or `faceForFaceOption` to inspect a face by colour or orientation. Returned face data is derived from the current cube state and updates as the cube changes.

```typescript
import {
  Cube,
  CubeRotationDirection,
  FaceOption,
  ICube,
  IFace,
  Axis,
} from '@markforster/cubits';

const cube: ICube = new Cube();
const topFace: IFace = cube.face(FaceOption.TOP);
const whiteFace: IFace = cube.face(FaceOption.WHITE);

console.log('Top face colours:', topFace.colours);
console.log('White face colours:', whiteFace.colours);

cube.rotate(Axis.X, CubeRotationDirection.ClockWise);

console.log('Top face colours after rotation:', topFace.colours);
console.log('White face normals after rotation:', whiteFace.normals);
```

If you need direct access to a shared `CubeState`, pass one to the constructor:

```typescript
import {
  Axis,
  Cube,
  CubeRotationDirection,
  CubeState,
  ICube,
  newCubeState,
} from '@markforster/cubits';

const cubeState: CubeState = newCubeState();
const cube: ICube = new Cube(cubeState);

console.log(cubeState);

cube.rotate(Axis.X, CubeRotationDirection.ClockWise);

console.log(cubeState);
```

Note: `cube.state` returns a deep-cloned snapshot. Mutating that snapshot will not change the cube.

### Execute Cube Notation

`Operator` can parse and execute [standard cube notation](https://ruwix.com/the-rubiks-cube/notation/) against a cube.

The library also supports orientation tokens in the form `lU`, where the lowercase face is moved to the uppercase target orientation. Chaining orientation tokens allows you to orient the cube across two faces while preserving the previously targeted face where possible.

```typescript
import { Cube, ICube, IOperator, Operator } from '@markforster/cubits';

const cube: ICube = new Cube();
const operator: IOperator = new Operator();

operator.cube = cube;
operator.execute("R U R' U'");
operator.execute('lU');
```

## Further Reading

- Full usage notes: [docs/USAGE.md](./docs/USAGE.md)
- Additional implementation and demo code: [examples](./examples)

## Examples

Check the [examples](./examples) directory for additional usage scenarios and demonstrations.

## License

This project is licensed under the [MIT License](./LICENSE).
