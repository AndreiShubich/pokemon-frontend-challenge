import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';

const getPokemonEggGroups = (
  { egg_groups }: IPokemonSpecies,
) => egg_groups.map(group => group.name).join(', ');

export default getPokemonEggGroups;
