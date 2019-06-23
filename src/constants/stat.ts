import { PokemonStatName } from 'types/pokemonTypes';

/* eslint-disable import/prefer-default-export */
export const STAT_MAP = {
  [PokemonStatName.hp]: 'HP',
  [PokemonStatName.attack]: 'Attack',
  [PokemonStatName.defense]: 'Defense',
  [PokemonStatName.speed]: 'Speed',
  [PokemonStatName['special-attack']]: 'Sp Atk',
  [PokemonStatName['special-defense']]: 'Sp Def',
};
