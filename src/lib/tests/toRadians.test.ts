import { FULL_ROTATION } from '../rotation';
import { toRadians } from '../toRadians';

describe('toRadians function', () => {
  it('should convert 0 degrees to 0 radians', () => {
    const degrees = 0;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo(0, 10); // Using toBeCloseTo to handle floating-point precision issues
  });

  it('should convert 90 degrees to π/2 radians', () => {
    const degrees = FULL_ROTATION;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo(Math.PI / 2, 10);
  });

  it('should convert 180 degrees to π radians', () => {
    const degrees = FULL_ROTATION * 2;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo(Math.PI, 10);
  });

  it('should convert 270 degrees to 3π/2 radians', () => {
    const degrees = FULL_ROTATION * 3;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo((3 * Math.PI) / 2, 10);
  });

  it('should convert 360 degrees to 2π radians', () => {
    const degrees = FULL_ROTATION * 4;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo(0, 10);
  });

  it('should convert negative angles correctly', () => {
    const degrees = -45;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo(-Math.PI / 4, 10);
  });

  it('should handle decimal degrees', () => {
    const degrees = 30.5;
    const radians = toRadians(degrees);
    expect(radians).toBeCloseTo((30.5 * Math.PI) / 180, 10);
  });
});
