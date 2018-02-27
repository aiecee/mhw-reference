import { Component, OnInit } from "@angular/core";

import "rxjs/add/operator/do";

import { Store } from "@ngrx/store";

import * as fromStore from "./store";
import { monsters } from "./store/reducers/monster.reducers";
import { GetMonsters } from "./store";

@Component({
  selector: "app-root",
  template: `
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          MHW Reference
        </h1>
        <h2 class="subtitle">
          MHW weakness and classification quick reference
        </h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <app-monster-list></app-monster-list>
    </div>
  </section>
  `
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(private store: Store<fromStore.IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetMonsters(""));
  }
}
