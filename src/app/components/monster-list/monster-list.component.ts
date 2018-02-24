import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import * as fromModels from "../../models";

@Component({
  selector: "app-monster-list",
  templateUrl: "./monster-list.component.html",
  styleUrls: ["./monster-list.component.css"]
})
export class MonsterListComponent implements OnInit {
  monsters: Observable<fromModels.IMonster[]>;
  searchTerm: string;

  constructor(private store: Store<fromStore.IAppState>) {}

  ngOnInit() {
    this.monsters = this.store.select(fromStore.monstersMonsters);
  }

  search() {
    this.store.dispatch(new fromStore.GetMonsters(this.searchTerm));
  }
}
