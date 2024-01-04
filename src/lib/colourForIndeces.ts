import { colourForIndex } from './colourForIndex';
import { COLOURS } from './colours';

export function colourForIndices(indices: number[]): COLOURS[] {
  return indices.map((index: number) => {
    return colourForIndex(index);
  });
}
