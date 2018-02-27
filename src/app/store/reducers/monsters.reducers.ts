import { IMonster } from "../../models/monsters.model";
import {
  MonstersActions,
  GET_MONSTERS_SUCCESS,
  GetMonstersSuccess,
  GET_MONSTERS_FAIL,
  GetMonstersFail
} from "../actions/monsters.action";

export interface IMonsterState {
  monsters: IMonster[];
  error: any;
}

export const initialState: IMonsterState = {
  monsters: [],
  error: null
};

export function reduceMonsters(
  state = initialState,
  action: MonstersActions
): IMonsterState {
  switch (action.type) {
    case GET_MONSTERS_SUCCESS: {
      const monsters = (<GetMonstersSuccess>action).monsters;
      return {
        ...state,
        monsters: monsters
      };
    }
    case GET_MONSTERS_FAIL: {
      const error = (<GetMonstersFail>action).error;
      return {
        ...state,
        monsters: [],
        error: error
      };
    }
  }
  return state;
}

export const monsters = (state: IMonsterState) => state.monsters;
export const error = (state: IMonsterState) => state.error;
