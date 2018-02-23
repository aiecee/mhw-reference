import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import * as _ from "lodash";

import { IMonster, allMonsters } from "../models/monsters.model";

export interface IMonsterService {
  get(filter: string): Observable<IMonster[]>;
}

@Injectable()
export class MonsterService implements IMonsterService {
  constructor() {}

  get(filter: string): Observable<IMonster[]> {
    return Observable.of(
      _.filter(
        allMonsters,
        monster => monster.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      )
    );
  }
}
