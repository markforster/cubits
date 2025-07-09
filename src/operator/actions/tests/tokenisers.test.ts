import { tokenisers } from '..';
import * as orientate from '../orientate';
import * as rotateAll from '../rotateAll';
import * as rotateSections from '../rotateSections';
import * as rotateFaces from '../rotateFaces';

describe('tokenisers', () => {
  it('should list actions in correct order', () => {
    expect(tokenisers.map((t) => t.callback)).toEqual([
      orientate.action,
      rotateAll.action,
      rotateSections.action,
      rotateFaces.action,
    ]);
  });

  it('should expose regex, turn type and callback from modules', () => {
    const [o, ra, rs, rf] = tokenisers;

    expect(o.regex).toBe(orientate.regex);
    expect(o.turnType).toBe(orientate.turntype);
    expect(o.callback).toBe(orientate.action);

    expect(ra.regex).toBe(rotateAll.regex);
    expect(ra.turnType).toBe(rotateAll.turntype);
    expect(ra.callback).toBe(rotateAll.action);

    expect(rs.regex).toBe(rotateSections.regex);
    expect(rs.turnType).toBe(rotateSections.turntype);
    expect(rs.callback).toBe(rotateSections.action);

    expect(rf.regex).toBe(rotateFaces.regex);
    expect(rf.turnType).toBe(rotateFaces.turntype);
    expect(rf.callback).toBe(rotateFaces.action);
  });
});
