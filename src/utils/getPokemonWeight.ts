import { IPokemon } from 'types/pokemonTypes';

const getPokemonWeight = ({ height }: IPokemon) => `${height / 10} kg`;

export default getPokemonWeight;
