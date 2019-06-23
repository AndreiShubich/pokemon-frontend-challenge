import { IPokemon } from 'types/pokemonTypes';

const getPokemonAbilities = (
  { abilities }: IPokemon,
) => abilities.map(ability => ability.ability.name).join(', ');

export default getPokemonAbilities;
