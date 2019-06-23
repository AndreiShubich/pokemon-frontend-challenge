import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';

// Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps
// before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.
const getPokemonHatchSteps = ({ hatch_counter }: IPokemonSpecies) => 255 * hatch_counter;

export default getPokemonHatchSteps;
