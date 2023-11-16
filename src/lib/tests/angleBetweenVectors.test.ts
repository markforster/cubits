import { angleBetweenVectors } from '../angleBetweenVectors';

describe('angleBetweenVectors', () => {
  it('calculates angle for orthogonal vectors', () => {
    const result = angleBetweenVectors([1, 0, 0], [0, 1, 0]);
    expect(result).toBe(90); // Orthogonal vectors should have a 90-degree angle
  });

  it('calculates angle for parallel vectors', () => {
    const result = angleBetweenVectors([2, 3, 4], [4, 6, 8]);
    expect(result).toBe(0); // Parallel vectors should have a 0-degree angle
  });

  it('calculates angle for anti-parallel vectors', () => {
    const result = angleBetweenVectors([1, 1, 1], [-1, -1, -1]);
    expect(result).toBe(180); // Anti-parallel vectors should have a 180-degree angle
  });

  it('calculates angle for vectors with zeros', () => {
    const result = angleBetweenVectors([0, 0, 0], [3, 4, 5]);

    // Since one of the vectors are zero vector, it is impossible to find the angle between the vectors!
    expect(result).toBe(NaN); // Angle with the zero vector should be NaN
  });

  it('calculates angle for vectors with negative zeros', () => {
    // Since one of the vectors are zero vector, it is impossible to find the angle between the vectors!
    const result = angleBetweenVectors([-0, -0, -0], [1, 2, 3]);
    expect(result).toBe(NaN); // Angle with the zero vector should be NaN
  });

  it('calculates angle for vectors with negative components', () => {
    const result = angleBetweenVectors([-1, 2, -3], [4, -5, 6]);
    expect(result).toBeCloseTo(167.0668, 3);
  });

  it('calculates angle for vectors with decimal components', () => {
    const result = angleBetweenVectors([1.5, 2.5, 3.5], [2, 3, 4]);
    expect(result).toBeCloseTo(2.8618, 3);
  });
});
