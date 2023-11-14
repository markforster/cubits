import { colourForIndex } from '../colourForIndex';
import { COLOURS } from '../colours';
import { SurfaceMarker } from '../markers';

describe('colourForIndex should return the correct colour for a marker index', () => {
  it('The colour for the white marker index should be white', () => {
    expect(colourForIndex(SurfaceMarker.WHITE)).toBe(COLOURS.WHITE);
  });

  it('The colour for the yellow marker index should be yellow', () => {
    expect(colourForIndex(SurfaceMarker.YELLOW)).toBe(COLOURS.YELLOW);
  });

  it('The colour for the green marker index should be green', () => {
    expect(colourForIndex(SurfaceMarker.GREEN)).toBe(COLOURS.GREEN);
  });

  it('The colour for the orange marker index should be orange', () => {
    expect(colourForIndex(SurfaceMarker.ORANGE)).toBe(COLOURS.ORANGE);
  });

  it('The colour for the red marker index should be red', () => {
    expect(colourForIndex(SurfaceMarker.RED)).toBe(COLOURS.RED);
  });

  it('Should throw an error when an invalid index number is passed as a parameter ', () => {
    expect(() => {
      colourForIndex(null);
    }).toThrowError();

    expect(() => {
      colourForIndex(undefined);
    }).toThrowError();
  });
});
