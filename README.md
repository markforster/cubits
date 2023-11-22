# Rubiks Cube TypeScript Library

![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/markforster/c101d6d2eb46daca41a0d4139367c468/raw/test.json)
 [![Tests](https://github.com/markforster/cubits/actions/workflows/tests.yml/badge.svg)](https://github.com/markforster/cubits/actions/workflows/tests.yml)

This typeScript module provides a representation of a Rubiks Cube and a set of functionalities to interact with it. The library is designed to be flexible and easily integrated into your projects. 

Out of interest you can find an insightful technical specification for the rubiks cube [here](https://homes.luddy.indiana.edu/stsher/files/Rubiks_Cube.pdf)

## Table of Contents

- [Installation](#installation)
- [Terminology](#terminology)
- [Usage](#usage)
  - [Initializing a Rubiks Cube](#initializing-a-rubiks-cube)
  - [Checking the Cube's Solved State](#checking-the-cubes-solved-state)
  - [Rotating a Cube Layer](#rotating-a-cube-layer)
  - [Rotating the Cube](#rotating-the-cube)
  - [Deriving colour, indices, orientation and normal information from the cubestate](#deriving-colour-indices-orientation-and-normal-information-from-the-cubestate)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @markforster/cubits
```

## Usage

For full information on using the module check the [usage docs](./docs/USAGE.md).

#### Initializing a Rubiks Cube

An instance of a cube can be created by simply importing the Cube class and creating an instance.

```typescript
import { Cube, ICube } from '@markforster/cubits';

const cube: ICube = new Cube();
```

#### Checking the Cube's Solved State

```typescript
import { COLOURS, ICube, AxisVertex } from '@markforster/cubits';

const cube: ICube = new Cube();

console.log(`Solved for colour ${COLOURS[COLOURS.WHITE]}:`, cube.solved(COLOURS.WHITE));
console.log(`Solved for colour ${COLOURS[COLOURS.RED]}:`, cube.solved(COLOURS.RED));
console.log(`Solved for colour ${COLOURS[COLOURS.BLUE]}:`, cube.solved(COLOURS.BLUE));
console.log(`Solved for ALL:`, cube.solved());
```

#### Rotating a Cube Layer

```typescript
import { CubeRotationDirection, ICube, COLOURS } from '@markforster/cubits';

const cube: ICube = new Cube();

cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.ClockWise);
cube.rotateLayerForColour(COLOURS.BLUE, CubeRotationDirection.AntiClockWise);
```

#### Rotating the Cube

```typescript
import { Cube, ICube, AxisVertex, CubeRotationDirection } from "@markforster/cubits"

const cube: ICube = new Cube();
cube.rotate(AxisVertex.PITCH, CubeRotationDirection.ClockWise);
```

#### Deriving colour, indices, orientation and normal information from the cubestate

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

## Examples

Check the [examples](./examples) directory for additional usage scenarios and demonstrations.

## License

This project is licensed under the [MIT License](LICENSE).
