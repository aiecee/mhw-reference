import { Component, OnInit, Input } from "@angular/core";

import * as fromModels from "../../models";

@Component({
  selector: "app-monster",
  templateUrl: "./monster.component.html",
  styleUrls: ["./monster.component.css"]
})
export class MonsterComponent implements OnInit {
  @Input() monster: fromModels.IMonster;

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("Clicked: " + this.monster.name);
  }
}
