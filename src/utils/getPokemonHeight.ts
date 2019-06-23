import { IPokemon } from 'types/pokemonTypes';

const getPokemonHeight = ({ height }: IPokemon) => `${height / 10} m`;

export default getPokemonHeight;
