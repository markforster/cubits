import { FaceOption } from '..';
import { COLOURS } from '../../colours';
import { colorForFaceOption } from '../colorForFaceOption';

describe('Getting a COLOUR for a FaceOption', () => {
  // Testing Orientations
  it('Should return the colour WHITE for face option WHITE ', () => {
    expect(colorForFaceOption(FaceOption.TOP)).toBe(undefined);
  });

  it('Should return the colour YELLOW for face option YELLOW ', () => {
    expect(colorForFaceOption(FaceOption.BOTTOM)).toBe(undefined);
  });

  it('Should return the colour BLUE for face option BLUE ', () => {
    expect(colorForFaceOption(FaceOption.BACK)).toBe(undefined);
  });

  it('Should return the colour GREEN for face option GREEN ', () => {
    expect(colorForFaceOption(FaceOption.FRONT)).toBe(undefined);
  });

  it('Should return the colour RED for face option RED ', () => {
    expect(colorForFaceOption(FaceOption.RIGHT)).toBe(undefined);
  });

  it('Should return the colour ORANGE for face option ORANGE ', () => {
    expect(colorForFaceOption(FaceOption.LEFT)).toBe(undefined);
  });

  // Testing colours
  it('Should return the colour WHITE for face option WHITE ', () => {
    expect(colorForFaceOption(FaceOption.WHITE)).toBe(COLOURS.WHITE);
  });

  it('Should return the colour YELLOW for face option YELLOW ', () => {
    expect(colorForFaceOption(FaceOption.YELLOW)).toBe(COLOURS.YELLOW);
  });

  it('Should return the colour BLUE for face option BLUE ', () => {
    expect(colorForFaceOption(FaceOption.BLUE)).toBe(COLOURS.BLUE);
  });

  it('Should return the colour GREEN for face option GREEN ', () => {
    expect(colorForFaceOption(FaceOption.GREEN)).toBe(COLOURS.GREEN);
  });

  it('Should return the colour RED for face option RED ', () => {
    expect(colorForFaceOption(FaceOption.RED)).toBe(COLOURS.RED);
  });

  it('Should return the colour ORANGE for face option ORANGE ', () => {
    expect(colorForFaceOption(FaceOption.ORANGE)).toBe(COLOURS.ORANGE);
  });
});
