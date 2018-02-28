import { IMonster } from "../../models/monsters.model";
import {
  MonsterDetailActions,
  GET_MONSTER_DETAIL_SUCCESS,
  GetMonsterDetailSuccess,
  GET_MONSTER_DETAIL_FAIL,
  GetMonsterDetailFail
} from "../actions/monster-detail.action";

export interface IMonsterDetailState {
  monster: IMonster;
  error: any;
}

export const initialMonsterDetailState: IMonsterDetailState = {
  monster: null,
  error: null
};

export function reduceMonsterDetail(
  state = initialMonsterDetailState,
  action: MonsterDetailActions
): IMonsterDetailState {
  switch (action.type) {
    case GET_MONSTER_DETAIL_SUCCESS: {
      const monster = (<GetMonsterDetailSuccess>action).monster;
      return {
        monster: monster,
        error: null
      };
    }
    case GET_MONSTER_DETAIL_FAIL: {
      const error = (<GetMonsterDetailFail>action).error;
      return {
        ...state,
        error: error
      };
    }
  }
  return state;
}

export const monsterDetail = (state: IMonsterDetailState) => state.monster;
export const error = (state: IMonsterDetailState) => state.error;
