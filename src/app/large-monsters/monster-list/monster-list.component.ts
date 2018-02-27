import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import * as fromModels from "../../models";

@Component({
  selector: "app-monster-list",
  template: `
  <div class="field">
    <div class="control">
      <input class="input" type="text" placeholder="Search" (input)="searchTerm = $event.target.value" (keyup)="search()">
    </div>
  </div>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" *ngFor="let monster of (monsters | async)">
      <app-monster [monster]="monster" ></app-monster>
    </div>
  </div>
`
})
export class MonsterListComponent implements OnInit {
  monsters: Observable<fromModels.IMonster[]>;
  searchTerm: string;

  constructor(private store: Store<fromStore.IAppState>) {}

  ngOnInit() {
    this.monsters = this.store.select(fromStore.monstersMonsters);
    this.store.dispatch(new fromStore.GetMonsters(""));
  }

  search() {
    this.store.dispatch(new fromStore.GetMonsters(this.searchTerm));
  }
}
