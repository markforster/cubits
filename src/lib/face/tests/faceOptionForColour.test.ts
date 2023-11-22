import { FaceOption } from '..';
import { COLOURS } from '../../colours';
import { faceOptionForColour } from '../faceOptionForColour';

describe('Getting a face option for a colour', () => {
  it('Should return a WHITE face option for the colour WHITE', () => {
    expect(faceOptionForColour(COLOURS.WHITE)).toBe(FaceOption.WHITE);
  });

  it('Should return a YELLOW face option for the colour YELLOW', () => {
    expect(faceOptionForColour(COLOURS.YELLOW)).toBe(FaceOption.YELLOW);
  });

  it('Should return a BLUE face option for the colour BLUE', () => {
    expect(faceOptionForColour(COLOURS.BLUE)).toBe(FaceOption.BLUE);
  });

  it('Should return a GREEN face option for the colour GREEN', () => {
    expect(faceOptionForColour(COLOURS.GREEN)).toBe(FaceOption.GREEN);
  });

  it('Should return a RED face option for the colour RED', () => {
    expect(faceOptionForColour(COLOURS.RED)).toBe(FaceOption.RED);
  });

  it('Should return a ORANGE face option for the colour ORANGE', () => {
    expect(faceOptionForColour(COLOURS.ORANGE)).toBe(FaceOption.ORANGE);
  });
});
