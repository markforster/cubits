import { ICube } from '../cube/ICube';

export enum TurnType {
  OuterLayerRotation = 'OuterLayerRotation',
  InnerLayerRotation = 'InnerLayerRotation',
  CubeRotation = 'CubeRotation',
  Orientation = 'Orienation',
}

export type Turn = {
  turnType: TurnType;
  token: string;
};

type TurnExecution = (cube: ICube, turn: Turn, lastTurn?: Turn) => void;

export type Tokeniser = {
  regex: RegExp;
  callback: TurnExecution;
  turnType: TurnType;
};
