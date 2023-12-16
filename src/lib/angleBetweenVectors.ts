import { Vertex } from '../cube/lib';
import { dotProduct } from './dotProduct';
import { vectorMagnitude } from './vectorMagnitude';

export const angleBetweenVectors = (a: Vertex, b: Vertex): number => {
  const dot = dotProduct(a, b);
  const magnitudeA = vectorMagnitude(a);
  const magnitudeB = vectorMagnitude(b);

  const cosineTheta = dot / (magnitudeA * magnitudeB);
  const safeCosineTheta = Math.max(-1, Math.min(1, cosineTheta));

  // Use the arccosine function to get the angle in radians
  const angleInRadians = Math.acos(safeCosineTheta);

  // Convert the angle to degrees
  const angleInDegrees = (angleInRadians * 180) / Math.PI;

  return angleInDegrees;
};
