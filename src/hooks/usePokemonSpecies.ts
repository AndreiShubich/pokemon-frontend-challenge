import { useState, useEffect } from 'react';
import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';
import Pokedex from 'utils/Pokedex';

// pokeapi-js-wrapper, Any function with the designation "ByName" can also be passed an integer ID.
const usePokemonSpecies = (nameOrId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies>();

  useEffect(() => {
    setIsLoading(true);
    Pokedex.getPokemonSpeciesByName(nameOrId)
      .then((response: IPokemonSpecies) => {
        setPokemonSpecies(response);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [nameOrId]);

  return ({ isLoading, pokemonSpecies });
};

export default usePokemonSpecies;
