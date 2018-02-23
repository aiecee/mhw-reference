import { Component, OnInit } from "@angular/core";

import "rxjs/add/operator/do";

import { Store } from "@ngrx/store";

import * as fromStore from "./store";
import { monsters } from "./store/reducers/monster.reducers";
import { GetMonsters } from "./store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(private store: Store<fromStore.IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetMonsters(""));
  }
}
