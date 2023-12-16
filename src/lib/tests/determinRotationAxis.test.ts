import { AxisVertex, LayersVertex } from '..';
import { determinRotationAxis } from '../determinRotationAxis';
import { normaliseVertex } from '../normaliseVertex';

describe('Determine a suitable rotation for a cube state', () => {
  it('Should determine the rotation axis as YAW when specifying LEFT as source and BACK as target', () => {
    expect(determinRotationAxis(LayersVertex.LEFT, LayersVertex.BACK)).toEqual(
      AxisVertex.YAW,
    );
  });

  it('Should determine the rotation axis as YAW when specifying LEFT as source and FRONT as target', () => {
    expect(determinRotationAxis(LayersVertex.LEFT, LayersVertex.FRONT)).toEqual(
      AxisVertex.YAW,
    );
  });

  it('Should determine the rotation axis as YAW when specifying RIGHT as source and FRONT as target', () => {
    expect(
      determinRotationAxis(LayersVertex.RIGHT, LayersVertex.FRONT),
    ).toEqual(AxisVertex.YAW);
  });

  it('Should determine the rotation axis as YAW when specifying RIGHT as source and BACK as target', () => {
    expect(determinRotationAxis(LayersVertex.RIGHT, LayersVertex.BACK)).toEqual(
      AxisVertex.YAW,
    );
  });

  it('Should determine the rotation axis as ROLL when specifying TOP as source and LEFT as target', () => {
    expect(determinRotationAxis(LayersVertex.TOP, LayersVertex.LEFT)).toEqual(
      normaliseVertex(AxisVertex.ROLL),
    );
  });

  it('Should determine the rotation axis as ROLL when specifying BOTTOM as source and RIGHT as target', () => {
    expect(determinRotationAxis(LayersVertex.TOP, LayersVertex.RIGHT)).toEqual(
      normaliseVertex(AxisVertex.ROLL),
    );
  });

  it('Should determine the rotation axis as ROLL when specifying BOTTOM as source and LEFT as target', () => {
    expect(
      determinRotationAxis(LayersVertex.BOTTOM, LayersVertex.LEFT),
    ).toEqual(normaliseVertex(AxisVertex.ROLL));
  });

  it('Should determine the rotation axis as ROLL when specifying BOTTOM as source and RIGHT as target', () => {
    expect(
      determinRotationAxis(LayersVertex.BOTTOM, LayersVertex.RIGHT),
    ).toEqual(normaliseVertex(AxisVertex.ROLL));
  });

  it('Should determine the rotation axis as PITCH when specifying FRONT as source and TOP as target', () => {
    expect(determinRotationAxis(LayersVertex.FRONT, LayersVertex.TOP)).toEqual(
      normaliseVertex(AxisVertex.PITCH),
    );
  });

  it('Should determine the rotation axis as PITCH when specifying FRONT as source and BOTTOM as target', () => {
    expect(
      determinRotationAxis(LayersVertex.FRONT, LayersVertex.BOTTOM),
    ).toEqual(normaliseVertex(AxisVertex.PITCH));
  });

  it('Should determine the rotation axis as PITCH when specifying BACK as source and TOP as target', () => {
    expect(determinRotationAxis(LayersVertex.BACK, LayersVertex.TOP)).toEqual(
      normaliseVertex(AxisVertex.PITCH),
    );
  });

  it('Should determine the rotation axis as ROLL when specifying TOP as source and BOTTOM as target so as to preserve the FRONT', () => {
    expect(determinRotationAxis(LayersVertex.TOP, LayersVertex.BOTTOM)).toEqual(
      normaliseVertex(AxisVertex.ROLL),
    );
  });

  it('Should determine the rotation axis as YAW when specifying FRONT as source and BACK as target so as to preserve the TOP', () => {
    expect(determinRotationAxis(LayersVertex.FRONT, LayersVertex.BACK)).toEqual(
      normaliseVertex(AxisVertex.YAW),
    );
  });

  it('Should determine the rotation axis as PITCH when the TOP is the source, BOTTOM is the target and the locked axis is LEFT ', () => {
    expect(
      determinRotationAxis(
        LayersVertex.TOP,
        LayersVertex.BOTTOM,
        LayersVertex.LEFT,
      ),
    ).toEqual(normaliseVertex(AxisVertex.PITCH));
  });

  it('Should determine the rotation axis as ROLL when the TOP is the source, BOTTOM is the target and the locked axis is FRONT ', () => {
    expect(
      determinRotationAxis(
        LayersVertex.TOP,
        LayersVertex.BOTTOM,
        LayersVertex.FRONT,
      ),
    ).toEqual(normaliseVertex(AxisVertex.ROLL));
  });

  it('Should determine the rotation axis as ROLL when LEFT is the source, RIGHT is the target and the locked axis is FRONT ', () => {
    expect(
      determinRotationAxis(
        LayersVertex.LEFT,
        LayersVertex.RIGHT,
        LayersVertex.FRONT,
      ),
    ).toEqual(normaliseVertex(AxisVertex.ROLL));
  });

  it('Should determine the rotation axis as ROLL when LEFT is the source, RIGHT is the target and the locked axis is TOP ', () => {
    expect(
      determinRotationAxis(
        LayersVertex.LEFT,
        LayersVertex.RIGHT,
        LayersVertex.TOP,
      ),
    ).toEqual(normaliseVertex(AxisVertex.YAW));
  });

  it('Should determine the rotation axis as PITCH when FRONT is the source, BACK is the target and the locked axis is LEFT ', () => {
    expect(
      determinRotationAxis(
        LayersVertex.FRONT,
        LayersVertex.BACK,
        LayersVertex.LEFT,
      ),
    ).toEqual(normaliseVertex(AxisVertex.PITCH));
  });

  it('Should determine the rotation axis as YAW when FRONT is the source, BACK is the target and the locked axis is TOP ', () => {
    expect(
      determinRotationAxis(
        LayersVertex.FRONT,
        LayersVertex.BACK,
        LayersVertex.TOP,
      ),
    ).toEqual(normaliseVertex(AxisVertex.YAW));
  });

  it('Should throw an error when an attempt is made to lock a face that is the target face ', () => {
    expect(() => {
      determinRotationAxis(
        LayersVertex.FRONT,
        LayersVertex.LEFT,
        LayersVertex.LEFT,
      );
    }).toThrow(`Not possible to rotate 0,0,-1 to -1,0,0 while locking -1,0,0`);
  });
});
