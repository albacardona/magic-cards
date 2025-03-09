export interface Card {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  variations: string[];
  foreignNames: ForeignName[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: LegalityElement[];
  id: string;
}

export interface ForeignName {
  name: string;
  text: string;
  type: string;
  flavor: string;
  imageUrl: string;
  language: string;
  identifiers: Identifiers;
  multiverseid: number;
}

export interface Identifiers {
  scryfallId: string;
  multiverseId: number;
}

export interface LegalityElement {
  format: string;
  legality: LegalityEnum;
}

export enum LegalityEnum {
  Legal = 'Legal',
  Restricted = 'Restricted',
}
