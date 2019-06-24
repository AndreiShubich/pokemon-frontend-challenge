import React, { useEffect, useState, useCallback } from 'react';
import Pokedex from 'utils/Pokedex';
import { INamedAPIResourceList } from 'types/commonTypes';
import { IType } from 'types/typeTypes';

const AllPokemonsContainer: React.FC<{
  limit: number;
  offset: number;
  typeName?: string;
  children: (isLoading: boolean, pokemonsList: INamedAPIResourceList) => React.ReactNode;
}> = ({
  limit,
  offset,
  typeName,
  children,
}) => {
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

  if (!pokemonsList) return null;

  return (
    <>
      {children(isLoading, pokemonsList)}
    </>
  );
};

export default React.memo(AllPokemonsContainer);
