import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MonsterListComponent } from "./monster-list/monster-list.component";
import { MonsterDetailComponent } from "./monster-detail/monster-detail.component";

const routes: Routes = [
  { path: "monsters", component: MonsterListComponent },
  { path: "monsters/:id", component: MonsterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeMonstersRoutingModule {}
