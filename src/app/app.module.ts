import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import * as fromStore from "./store";
import * as fromServices from "./services";
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { MonsterComponent } from './components/monster/monster.component';

@NgModule({
  declarations: [AppComponent, MonsterListComponent, MonsterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects)
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule {}
