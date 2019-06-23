/* eslint-disable import/prefer-default-export */

import { INamedAPIResource } from './commonTypes';

interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export enum PokemonTypeName {
  normal = 'normal',
  fighting = 'fighting',
  flying = 'flying',
  poison = 'poison',
  ground = 'ground',
  rock = 'rock',
  bug = 'bug',
  ghost = 'ghost',
  steel = 'steel',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  psychic = 'psychic',
  ice = 'ice',
  dragon = 'dragon',
  dark = 'dark',
  fairy = 'fairy',
}

export interface IPokemonType {
  slot: number;
  type: INamedAPIResource<PokemonTypeName>;
}

interface IPokemonAbility {
  ability: INamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

interface IPokemonMoveVersion {
  move_learn_method: INamedAPIResource;
  version_group: INamedAPIResource;
  level_learned_at: number;
}

interface IPokemonMove {
  move: INamedAPIResource;
  version_group_details: IPokemonMoveVersion[];
}

export enum PokemonStatName {
  hp = 'hp',
  attack = 'attack',
  defense = 'defense',
  speed = 'speed',
  'special-attack' = 'special-attack',
  'special-defense' = 'special-defense',
}

interface IPokemonStat {
  stat: INamedAPIResource<PokemonStatName>;
  effort: number;
  base_stat: number;
}

interface IVersionGameIndex {
  game_index: number;
  version: INamedAPIResource;
}

interface IPokemonHeldItemVersion {
  version: INamedAPIResource;
  rarity: number;
}

interface IPokemonHeldItem {
  item: INamedAPIResource;
  version_details: IPokemonHeldItemVersion[];
}

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height:number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IPokemonAbility[];
  forms: INamedAPIResource[];
  game_indices: IVersionGameIndex[];
  held_items: IPokemonHeldItem[];
  location_area_encounters: string;
  moves: IPokemonMove[];
  sprites: IPokemonSprites;
  species: INamedAPIResource;
  stats: IPokemonStat[];
  types: IPokemonType[];
}
