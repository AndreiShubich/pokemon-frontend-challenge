import { IPokemon } from 'types/pokemonTypes';
import { TYPE_COLOR_MAP } from 'constants/colors';
import getPokemonTypeNames from './getPokemonTypeNames';

const getPokemonBackground = (pokemon: IPokemon) => {
  const typeNames = getPokemonTypeNames(pokemon);

  const [type1, type2] = typeNames;

  if (!type1) {
    return undefined;
  }

  if (!type2) {
    return TYPE_COLOR_MAP[type1];
  }

  return `linear-gradient(90deg, ${TYPE_COLOR_MAP[type1]} 50%, ${TYPE_COLOR_MAP[type2]} 50%)`;
};

export default getPokemonBackground;
