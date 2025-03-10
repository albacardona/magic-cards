export interface Collection {
  id: string;
  name: string;
  cards: Card[];
  isFavourite: boolean;
}

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

interface ForeignName {
  name: string;
  text: string;
  type: string;
  flavor: string;
  imageUrl: string;
  language: string;
  identifiers: Identifiers;
  multiverseid: number;
}

interface Identifiers {
  scryfallId: string;
  multiverseId: number;
}

interface LegalityElement {
  format: string;
  legality: LegalityEnum;
}

enum LegalityEnum {
  Legal = 'Legal',
  Restricted = 'Restricted',
}

export interface ErrorAPI {
  status: number;
  message: string;
}

export interface ButtonTypes {
  content: string;
  onClick: () => void;
  variant?: string;
  size?: string;
}

export interface ActionButtonsTypes extends ButtonTypes {
  id: number;
}
