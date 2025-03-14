import type { ReactElement } from 'react';

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

export interface ButtonTypes {
  children: ReactElement | string;
  onClick: () => void;
  className?: string;
}

export interface CardAction {
  onClick: (card: Card) => void;
  icon: ReactElement;
}
