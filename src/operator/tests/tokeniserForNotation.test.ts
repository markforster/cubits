import { tokeniserForNotation } from '../lib';
import { action as sectionAction } from './../actions/rotateSections';
import { action as rotateAllAction } from './../actions/rotateAll';
import { action as rotateFaceAction } from './../actions/rotateFaces';
import { action as orientateAction } from './../actions/orientate';

describe(`Mapping a tokeniser from notation`, () => {
  describe(`Matching the EMS tokeniser`, () => {
    it(`Should find the EMS Tokeniser when passed "E"`, () => {
      expect(tokeniserForNotation('E').callback).toBe(sectionAction);
    });

    it(`Should find the EMS Tokeniser when passed "M"`, () => {
      expect(tokeniserForNotation(`M`).callback).toBe(sectionAction);
    });

    it('Should find the EMS Tokeniser when passed "S"', () => {
      expect(tokeniserForNotation(`S`).callback).toBe(sectionAction);
    });

    it(`Should find the EMS Tokeniser when passed "E'"`, () => {
      expect(tokeniserForNotation(`E'`).callback).toBe(sectionAction);
    });

    it(`Should find the EMS Tokeniser when passed "M'"`, () => {
      expect(tokeniserForNotation(`M'`).callback).toBe(sectionAction);
    });

    it(`Should find the EMS Tokeniser when passed "S'"`, () => {
      expect(tokeniserForNotation(`S'`).callback).toBe(sectionAction);
    });
  });

  describe(`Matching the XYZ tokeniser`, () => {
    it(`Should find the XYZ Tokeniser when passed "X"`, () => {
      expect(tokeniserForNotation(`X`).callback).toBe(rotateAllAction);
    });

    it(`Should find the XYZ Tokeniser when passed "Y"`, () => {
      expect(tokeniserForNotation(`Y`).callback).toBe(rotateAllAction);
    });

    it(`Should find the XYZ Tokeniser when passed "Z"`, () => {
      expect(tokeniserForNotation(`Z`).callback).toBe(rotateAllAction);
    });

    it(`Should find the XYZ Tokeniser when passed "X'"`, () => {
      expect(tokeniserForNotation(`X'`).callback).toBe(rotateAllAction);
    });

    it(`Should find the XYZ Tokeniser when passed "Y'"`, () => {
      expect(tokeniserForNotation(`Y'`).callback).toBe(rotateAllAction);
    });

    it(`Should find the XYZ Tokeniser when passed "Z'"`, () => {
      expect(tokeniserForNotation(`Z'`).callback).toBe(rotateAllAction);
    });
  });

  describe(`Matching the FRULBD tokeniser`, () => {
    it(`Should find the FRULBD Tokeniser when passed "F"`, () => {
      expect(tokeniserForNotation(`F`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "R"`, () => {
      expect(tokeniserForNotation(`R`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "U"`, () => {
      expect(tokeniserForNotation(`U`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "L"`, () => {
      expect(tokeniserForNotation(`L`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "B"`, () => {
      expect(tokeniserForNotation(`B`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "D"`, () => {
      expect(tokeniserForNotation(`D`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "F'"`, () => {
      expect(tokeniserForNotation(`F'`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "R'"`, () => {
      expect(tokeniserForNotation(`R'`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "U'"`, () => {
      expect(tokeniserForNotation(`U'`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "L'"`, () => {
      expect(tokeniserForNotation(`L'`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "B'"`, () => {
      expect(tokeniserForNotation(`B'`).callback).toBe(rotateFaceAction);
    });

    it(`Should find the FRULBD Tokeniser when passed "D'"`, () => {
      expect(tokeniserForNotation(`D'`).callback).toBe(rotateFaceAction);
    });
  });

  describe('Matching the orientation tokeniser', () => {
    it('Should find the orientation tokeniser when passed "fR"', () => {
      expect(tokeniserForNotation('fR').callback).toBe(orientateAction);
    });

    it('Should find the orientation tokeniser when passed "uD"', () => {
      expect(tokeniserForNotation('uD').callback).toBe(orientateAction);
    });
  });
});
