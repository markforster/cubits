import { FaceOption } from '..';
import { ORIENTATIONS } from '../../orientations';
import { orientationForFaceOption } from '../orientationForFaceOption';

describe('Getting an ORIENTATION for a FaceOption', () => {
  it('Should return undefined for face option WHITE ', () => {
    expect(orientationForFaceOption(FaceOption.WHITE)).toBe(undefined);
  });

  it('Should return undefined for face option YELLOW ', () => {
    expect(orientationForFaceOption(FaceOption.YELLOW)).toBe(undefined);
  });

  it('Should return undefined for face option BLUE ', () => {
    expect(orientationForFaceOption(FaceOption.BLUE)).toBe(undefined);
  });

  it('Should return undefined for face option GREEN ', () => {
    expect(orientationForFaceOption(FaceOption.GREEN)).toBe(undefined);
  });

  it('Should return undefined for face option RED ', () => {
    expect(orientationForFaceOption(FaceOption.RED)).toBe(undefined);
  });

  it('Should return undefined for face option ORANGE ', () => {
    expect(orientationForFaceOption(FaceOption.ORANGE)).toBe(undefined);
  });

  // Working colours
  it('Should return the orientation TOP for face option TOP ', () => {
    expect(orientationForFaceOption(FaceOption.TOP)).toBe(ORIENTATIONS.TOP);
  });

  it('Should return the orientation BOTTOM for face option BOTTOM ', () => {
    expect(orientationForFaceOption(FaceOption.BOTTOM)).toBe(ORIENTATIONS.BOTTOM);
  });

  it('Should return the orientation BACK for face option BACK ', () => {
    expect(orientationForFaceOption(FaceOption.BACK)).toBe(ORIENTATIONS.BACK);
  });

  it('Should return the orientation FRONT for face option FRONT ', () => {
    expect(orientationForFaceOption(FaceOption.FRONT)).toBe(ORIENTATIONS.FRONT);
  });

  it('Should return the orientation RIGHT for face option RIGHT ', () => {
    expect(orientationForFaceOption(FaceOption.RIGHT)).toBe(ORIENTATIONS.RIGHT);
  });

  it('Should return the orientation LEFT for face option LEFT ', () => {
    expect(orientationForFaceOption(FaceOption.LEFT)).toBe(ORIENTATIONS.LEFT);
  });
});
