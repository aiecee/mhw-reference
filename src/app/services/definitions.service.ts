import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import * as _ from "lodash";

import { IDefinition, IDefinitionDictionary } from "../models/definition.model";
import { monsters } from "../store";
import { map } from "rxjs/operators";

export interface IDefinitionService {
  load<TDefinition extends IDefinition>(
    path: string
  ): Observable<IDefinitionDictionary<TDefinition>>;
}

export const MONSTER_DEFINITIONS =
  "./assets/definitions/monster_definitions.json";

@Injectable()
export class DefinitionsService implements IDefinitionService {
  constructor(private http: HttpClient) {}

  load<TDefinition extends IDefinition>(
    path: string
  ): Observable<IDefinitionDictionary<TDefinition>> {
    return this.http.get<IDefinitionDictionary<TDefinition>>(path);
  }
}
