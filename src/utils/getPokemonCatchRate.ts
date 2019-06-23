import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';

const getPokemonCatchRate = (
  { capture_rate }: IPokemonSpecies,
) => `${(capture_rate * 100 / 255).toFixed(2)}%`;

export default getPokemonCatchRate;
