import { Action } from "@ngrx/store";
import { IMonster } from "../../models/monsters.model";
import { IDefinitionDictionary } from "../../models/definition.model";

export const GET_MONSTERS = "[Monsters] Get Monsters";
export const GET_MONSTERS_SUCCESS = "[Monsters] Get All Success";
export const GET_MONSTERS_FAIL = "[Monsters] Get All Fail";
export const GET_MONSTERS_TYPE = "[Monsters] Get Monsters Type";

export class GetMonsters implements Action {
  readonly type = GET_MONSTERS;
  constructor(public filter: string) {}
}

export class GetMonstersType implements Action {
  readonly type = GET_MONSTERS_TYPE;
  constructor(public monsterType: string) {}
}

export class GetMonstersSuccess implements Action {
  readonly type = GET_MONSTERS_SUCCESS;
  constructor(public monsters: IMonster[]) {}
}

export class GetMonstersFail implements Action {
  readonly type = GET_MONSTERS_FAIL;
  constructor(public error: any) {}
}

export type MonsterActions =
  | GetMonsters
  | GetMonstersType
  | GetMonstersSuccess
  | GetMonstersFail;
