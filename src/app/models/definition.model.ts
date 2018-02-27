export interface IDefinition {
  id: string;
  name: string;
  description: string;
  img: string;
}

export interface IDefinitionDictionary<TDefinition extends IDefinition> {
  [id: string]: TDefinition;
}
