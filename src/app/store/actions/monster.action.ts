import { Action } from "@ngrx/store";
import { IMonster } from "../../models/monsters.model";

export const GET_MONSTER = "[Monster] Get Monster";
export const GET_MONSTER_SUCCESS = "[Monster] Get Monster Success";
export const GET_MONSTER_FAIL = "[Monster] Get Monster Fail";

export class GetMonster implements Action {
  readonly type = GET_MONSTER;
  constructor(public id: string) {}
}

export class GetMonsterSuccess implements Action {
  readonly type = GET_MONSTER_SUCCESS;
  constructor(public monster: IMonster) {}
}

export class GetMonsterFail implements Action {
  readonly type = GET_MONSTER_FAIL;
  constructor(public error: any) {}
}

export type MonsterActions = GetMonster | GetMonsterSuccess | GetMonsterFail;
