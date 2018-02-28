import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/share";

import { Store } from "@ngrx/store";

import * as _ from "lodash";

import * as fromModels from "../../models";
import * as fromStore from "../../store";
import { GetMonsterDetail } from "../../store";
import { Title } from "@angular/platform-browser";

declare var gtag: Function;

@Component({
  selector: "app-monster-detail",
  templateUrl: "./monster-detail.component.html"
})
export class MonsterDetailComponent implements OnInit {
  monster: Observable<fromModels.IMonster>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromStore.IAppState>,
    private title: Title
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.monster = this.store
      .select(fromStore.monsterDetailMonster)
      .do(mon => {
        if (mon) {
          this.title.setTitle("Monster Hunter Reference - " + mon.name);
          gtag("event", "View " + mon.name, {
            event_category: "View Monster Detail",
            event_label: mon.name
          });
        }
      })
      .share();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.store.dispatch(new GetMonsterDetail(params.get("id")));
    });
  }

  range(length: number): Array<number> {
    return _.range(length);
  }
}
