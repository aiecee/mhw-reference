import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";

import { Store } from "@ngrx/store";

import * as _ from "lodash";

import * as fromModels from "../../models";
import * as fromStore from "../../store";

@Component({
  selector: "app-monster-detail",
  templateUrl: "./monster-detail.component.html"
})
export class MonsterDetailComponent implements OnInit {
  monster: Observable<fromModels.IMonster>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromStore.IAppState>
  ) {}

  ngOnInit() {
    /*this.monster = this.store.select(fromStore.mon.monsterDetailMonster);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.store.dispatch(new GetMonsterById(parseInt(params.get("id"))));
    });*/
  }

  range(length: number): Array<number> {
    return _.range(length);
  }
}
