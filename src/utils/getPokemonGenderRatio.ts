import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';

const getPokemonGenderRatio = ({ gender_rate }: IPokemonSpecies) => {
  // gender_rate - The chance of this Pokémon being female, in eighths; or -1 for genderless
  // https://github.com/PokeAPI/pokeapi/blob/master/pokemon_v2/README.md#pokemonspecies
  let femaleChance = 0;
  let maleChance = 0;

  if (gender_rate !== -1) {
    femaleChance = gender_rate * 100 / 8;
    maleChance = 100 - femaleChance;
  }

  return `${maleChance}% \u2642 ${femaleChance}% \u2640`;
};

export default getPokemonGenderRatio;
