import { IDefinition } from "./definition.model";

export interface IWeakness {
  name: string;
  value: number;
}

export interface IWeaknesses {
  form: string;
  elemental: IWeakness[];
  ailments: IWeakness[];
}

export interface IMonster extends IDefinition {
  type: string;
  weaknesses: IWeaknesses[];
}
