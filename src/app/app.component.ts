import { Component, OnInit } from "@angular/core";

import "rxjs/add/operator/do";

import { Store } from "@ngrx/store";

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
      <router-outlet></router-outlet>
    </div>
  </section>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
