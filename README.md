# Rubik's Cube TypeScript Library

![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/markforster/c101d6d2eb46daca41a0d4139367c468/raw/test.json)
 [![Tests](https://github.com/markforster/cubits/actions/workflows/tests.yml/badge.svg)](https://github.com/markforster/cubits/actions/workflows/tests.yml)

This TypeScript library provides a representation of a Rubik's Cube and a set of functionalities to interact with it. The library is designed to be flexible and easily integrated into your projects. Below is a guide on how to work with the `ICube` interface and interact with a Rubik's Cube instance.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Initializing a Rubik's Cube](#initializing-a-rubiks-cube)
  - [Checking the Cube's State](#checking-the-cubes-state)
  - [Rotating a Cube Layer](#rotating-a-cube-layer)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @markforster/cubits
```

## Usage

### Initializing a Rubik's Cube

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

## Examples

Check the [examples](./examples) directory for additional usage scenarios and demonstrations.

## License

This project is licensed under the [MIT License](LICENSE).
