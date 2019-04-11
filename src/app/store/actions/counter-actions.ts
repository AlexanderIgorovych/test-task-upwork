import { Action } from '@ngrx/store';

export enum ActionTypes {
  IncrementLower = 'IncrementLower',
  DecrementLower = 'DecrementLower',
  IncrementHigher = 'IncrementHigher',
  DecrementHigher = 'DecrementHigher',

  IncrementHigherTwice = 'IncrementHigherTwice',

  InitialLower = 'InitialLower',
  InitialHigher = 'InitialLower',

  Reset = 'Reset',
  Stop = 'Stop'
}

export class IncrementLower implements Action {
  readonly type = ActionTypes.IncrementLower;
}

export class DecrementLower implements Action {
  readonly type = ActionTypes.DecrementLower;
}

export class IncrementHigher implements Action {
  readonly type = ActionTypes.IncrementHigher;
}

export class DecrementHigher implements Action {
  readonly type = ActionTypes.DecrementHigher;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class Stop implements Action {
  readonly type = ActionTypes.Stop;
}

export class IncrementHigherTwice implements Action {
  readonly type = ActionTypes.IncrementHigherTwice;
}

export class InitialLower implements Action {
  readonly type = ActionTypes.InitialLower;
}

export class InitialHigher implements Action {
  readonly type = ActionTypes.InitialHigher;
}
