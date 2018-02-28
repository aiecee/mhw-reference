import { Action } from "@ngrx/store";
import { IMonster } from "../../models/monsters.model";

export const GET_MONSTER_DETAIL = "[Monster Detail] Get Monster";
export const GET_MONSTER_DETAIL_SUCCESS =
  "[Monster Detail] Get Monster Success";
export const GET_MONSTER_DETAIL_FAIL = "[Monster Detail] Get Monster Fail";

export class GetMonsterDetail implements Action {
  readonly type = GET_MONSTER_DETAIL;
  constructor(public id: string) {}
}

export class GetMonsterDetailSuccess implements Action {
  readonly type = GET_MONSTER_DETAIL_SUCCESS;
  constructor(public monster: IMonster) {}
}

export class GetMonsterDetailFail implements Action {
  readonly type = GET_MONSTER_DETAIL_FAIL;
  constructor(public error: any) {}
}

export type MonsterDetailActions =
  | GetMonsterDetail
  | GetMonsterDetailSuccess
  | GetMonsterDetailFail;
