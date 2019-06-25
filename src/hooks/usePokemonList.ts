import { useState, useEffect, useCallback } from 'react';
import Pokedex from 'utils/Pokedex';
import { INamedAPIResourceList } from 'types/commonTypes';
import { IType } from 'types/typeTypes';

// pokeapi-js-wrapper, Any function with the designation "ByName" can also be passed an integer ID.
const usePokemonList = (
  limit: number,
  offset: number,
  typeName?: string,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonsList, setPokemonsList] = useState<INamedAPIResourceList>();

  const getPokemonsList = useCallback(() => {
    setIsLoading(true);

    Pokedex.getPokemonsList({
      limit,
      offset,
    })
      .then((response: INamedAPIResourceList) => {
        setPokemonsList(response);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [limit, offset]);

  const getTypeByName = useCallback(() => {
    setIsLoading(true);

    Pokedex.getTypeByName(typeName)
      .then((response: IType) => {
        const count = response.pokemon.length;
        const results = response.pokemon
          .slice(offset, offset + limit)
          .map(({ pokemon }) => pokemon);

        setPokemonsList({
          count,
          results,
          next: null,
          previous: null,
        });
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [limit, offset, typeName]);

  useEffect(() => {
    if (typeName) {
      getTypeByName();
    } else {
      getPokemonsList();
    }
  }, [getPokemonsList, getTypeByName, limit, offset, typeName]);

  return ({ isLoading, pokemonsList });
};

export default usePokemonList;
