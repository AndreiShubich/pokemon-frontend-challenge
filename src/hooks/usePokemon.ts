import { useState, useEffect } from 'react';
import { IPokemon } from 'types/pokemonTypes';
import Pokedex from 'utils/Pokedex';

// pokeapi-js-wrapper, Any function with the designation "ByName" can also be passed an integer ID.
const usePokemon = (nameOrId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    setIsLoading(true);
    Pokedex.getPokemonByName(nameOrId)
      .then((response: IPokemon) => {
        setPokemon(response);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [nameOrId]);

  return ({ isLoading, pokemon });
};

export default usePokemon;
