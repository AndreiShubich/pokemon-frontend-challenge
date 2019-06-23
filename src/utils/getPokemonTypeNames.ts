import { IPokemon } from 'types/pokemonTypes';

const getPokemonTypeNames = (pokemon: IPokemon) => pokemon.types.map(
  ({ type: { name: typeName } }) => typeName,
);

export default getPokemonTypeNames;
