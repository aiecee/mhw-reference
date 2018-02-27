import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import * as fromModels from "../../models";

@Component({
  selector: "app-monster",
  template: `
    <div class="card" (click)="onClick()">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img [src]="monster.img" [alt]="monster.name" >
            </figure>
          </div>
          <div class="media-content" style="overflow-y: hidden">
            <p class="title is-5">{{ monster.name }}</p>
            <p class="subtitle is-6">{{ monster.type }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MonsterComponent implements OnInit {
  @Input() monster: fromModels.IMonster;

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    this.router.navigate(["monsters", this.monster.id]);
  }
}
