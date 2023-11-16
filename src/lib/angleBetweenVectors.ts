import { Vertex } from '../cube/lib';
import { dotProduct } from './dotProduct';
import { vectorMagnitude } from './vectorMagnitude';

export const angleBetweenVectors = (a: Vertex, b: Vertex): number => {
  const dot = dotProduct(a, b);
  const magnitudeA = vectorMagnitude(a);
  const magnitudeB = vectorMagnitude(b);

  // console.log('dot', dot);
  // console.log('magnitudeA', magnitudeA);
  // console.log('magnitudeB', magnitudeB);

  // console.log('(magnitudeA * magnitudeB)', magnitudeA * magnitudeB);
  const cosineTheta = dot / (magnitudeA * magnitudeB);
  //  || 0;
  // console.log('cosineTheta', cosineTheta)

  // if (isNaN(cosineTheta)) return 0;

  const safeCosineTheta = Math.max(-1, Math.min(1, cosineTheta));

  // Use the arccosine function to get the angle in radians
  const angleInRadians = Math.acos(safeCosineTheta);

  // console.log('angleInRadians', angleInRadians)

  // Convert the angle to degrees
  const angleInDegrees = (angleInRadians * 180) / Math.PI;

  return angleInDegrees;
};
