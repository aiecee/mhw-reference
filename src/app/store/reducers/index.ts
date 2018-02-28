import { ActionReducerMap, createSelector } from "@ngrx/store";

import * as fromMonsters from "./monsters.reducers";
import * as fromMonsterDetail from "./monster-detail.reducers";

export interface IAppState {
  monsters: fromMonsters.IMonsterState;
  monsterDetail: fromMonsterDetail.IMonsterDetailState;
}

export const reducers: ActionReducerMap<IAppState> = {
  monsters: fromMonsters.reduceMonsters,
  monsterDetail: fromMonsterDetail.reduceMonsterDetail
};

export const monsters = (state: IAppState) => state.monsters;
export const monstersMonsters = createSelector(monsters, fromMonsters.monsters);
export const monstersError = createSelector(monsters, fromMonsters.error);

export const monsterDetail = (state: IAppState) => state.monsterDetail;
export const monsterDetailMonster = createSelector(
  monsterDetail,
  fromMonsterDetail.monsterDetail
);
export const monsterDetailError = createSelector(
  monsterDetail,
  fromMonsterDetail.error
);
