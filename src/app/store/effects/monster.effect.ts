import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import { MonsterService } from "../../services/monster.service";
import {
  GET_MONSTERS,
  GetMonsters,
  GetMonstersSuccess,
  GetMonstersFail,
  GET_MONSTERS_TYPE,
  GetMonstersType
} from "../actions/monster.action";

@Injectable()
export class MonsterEffects {
  @Effect()
  monsters = this.actions
    .ofType(GET_MONSTERS)
    .pipe(
      map((action: GetMonsters) => action.filter),
      switchMap(filter =>
        this.monsterService
          .get(filter)
          .pipe(
            map(
              monsters => new GetMonstersSuccess(monsters),
              catchError(error => of(new GetMonstersFail(error)))
            )
          )
      )
    );

  @Effect()
  monstersOfType = this.actions.ofType(GET_MONSTERS_TYPE)
    .pipe(
      map((action: GetMonstersType) => action.monsterType),
      switchMap(type => this.monsterService.ofType(type).pipe(
        map(
          monsters => new GetMonstersSuccess(monsters),
          catchError(error => of(new GetMonstersFail(error)))
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private monsterService: MonsterService
  ) {}
}
