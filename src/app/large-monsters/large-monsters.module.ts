import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MonsterListComponent } from "./monster-list/monster-list.component";
import { MonsterDetailComponent } from "./monster-detail/monster-detail.component";
import { MonsterComponent } from "./monster/monster.component";
import { LargeMonstersRoutingModule } from "./large-monsters-routing.module";

@NgModule({
  imports: [CommonModule, LargeMonstersRoutingModule],
  declarations: [MonsterListComponent, MonsterDetailComponent, MonsterComponent]
})
export class LargeMonstersModule {}
