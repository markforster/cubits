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

## Examples

Check the [examples](./examples) directory for additional usage scenarios and demonstrations.

## License

This project is licensed under the [MIT License](LICENSE).
