import { PokemonTypeName } from 'types/pokemonTypes';

export const DEFAULT_FILTER_ALL = 'all';

export const FILTERS = [
  DEFAULT_FILTER_ALL,
  ...Object.values(PokemonTypeName),
];
