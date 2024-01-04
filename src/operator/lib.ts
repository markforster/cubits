import { ICube } from '../cube/ICube';
import { tokenisers } from './actions';
import { Tokeniser, Turn } from './types';

export function tokeniserForNotation(notation: string): Tokeniser {
  const result = tokenisers.find((t: Tokeniser) => {
    return t.regex.test(notation);
  });
  return result;
}

export function executeTurns(turns: Turn[], cube: ICube): void {
  turns.forEach((turn: Turn, index: number) => {
    console.group();
    const l: any = tokenisers.find((t: Tokeniser) => {
      return turn.turnType === t.turnType;
    });

    if (l) l.callback(cube, turn, (index > 0 && turns[index - 1]) || undefined);
    console.groupEnd();
  });
}

export class TokenErrorAtIndex extends Error {}
export function tokeniseNotation(notation: string): Turn[] {
  let workingString = notation;
  const commands: Turn[] = [];
  let noError = true;
  let count = 0;

  while (noError && workingString.length > 0) {
    const tokeniser: Tokeniser = tokeniserForNotation(workingString);
    if (!tokeniser) {
      noError = false;
      throw new TokenErrorAtIndex(
        `No Matching Tokeniser at position ${count} : ${notation}`,
      );
    } else {
      const matches: string[] = tokeniser.regex.exec(workingString);

      commands.push({
        turnType: tokeniser.turnType,
        token: matches[0],
      });
      const t: string = workingString.replace(tokeniser.regex, '');
      count = count + workingString.length - t.length;

      // if (t.length === workingString.length) noError = false;
      workingString = t;
    }
  }

  return commands;
}
