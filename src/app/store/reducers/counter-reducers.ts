import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/counter-actions';

export const initialStateLower = -5;

export function counterReducerLower(state = initialStateLower, action: Action) {
  switch (action.type) {
    case ActionTypes.InitialLower:
      return state = initialStateLower;

    case ActionTypes.IncrementLower:
      return state + 1;

    case ActionTypes.DecrementLower:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}

export const initialStateHigher = 10;


export function counterReducerHigher(state = initialStateHigher, action: Action) {
    switch (action.type) {
      case ActionTypes.InitialHigher:
      return state = initialStateHigher;

      case ActionTypes.IncrementHigher:
        return state + 1;

      case ActionTypes.DecrementHigher:
        return state - 1;

      case ActionTypes.IncrementHigherTwice:
        return state + 2;

      case ActionTypes.Reset:
        return 0;

      default:
        return state;
    }
}
