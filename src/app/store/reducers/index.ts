import { ActionReducerMap, createSelector } from "@ngrx/store";

import * as fromMonsters from "./monsters.reducers";

export interface IAppState {
  monsters: fromMonsters.IMonsterState;
}

export const reducers: ActionReducerMap<IAppState> = {
  monsters: fromMonsters.reduceMonsters
};

export const monsters = (state: IAppState) => state.monsters;
export const monstersMonsters = createSelector(monsters, fromMonsters.monsters);
export const monstersError = createSelector(monsters, fromMonsters.error);
