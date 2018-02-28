import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import * as _ from "lodash";
import {
  DefinitionsService,
  MONSTER_DEFINITIONS
} from "../../services/definitions.service";
import {
  GET_MONSTER_DETAIL,
  GetMonsterDetail,
  GetMonsterDetailSuccess,
  GetMonsterDetailFail
} from "../actions/monster-detail.action";
import * as fromModels from "../../models";

@Injectable()
export class MonsterDetailEffects {
  @Effect()
  monsterDetail = this.actions
    .ofType(GET_MONSTER_DETAIL)
    .pipe(
      map((action: GetMonsterDetail) => action.id),
      switchMap(id =>
        this.defService
          .byId(MONSTER_DEFINITIONS, id)
          .pipe(
            map(
              monster =>
                new GetMonsterDetailSuccess(<fromModels.IMonster>monster)
            ),
            catchError(error => of(new GetMonsterDetailFail(error)))
          )
      )
    );

  constructor(
    private actions: Actions,
    private defService: DefinitionsService
  ) {}
}
