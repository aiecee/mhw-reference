import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MonsterListComponent } from "./monster-list/monster-list.component";
import { MonsterDetailComponent } from "./monster-detail/monster-detail.component";
import { MonsterComponent } from "./monster/monster.component";

@NgModule({
  imports: [CommonModule],
  exports: [MonsterListComponent],
  declarations: [MonsterListComponent, MonsterDetailComponent, MonsterComponent]
})
export class LargeMonstersModule {}
