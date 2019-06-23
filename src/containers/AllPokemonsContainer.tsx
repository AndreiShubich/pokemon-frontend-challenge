import React, { useEffect, useState } from 'react';
import Pokedex from 'utils/Pokedex';
import { INamedAPIResourceList } from 'types/commonTypes';

const AllPokemonsContainer: React.FC<{
  limit: number;
  offset: number;
  children: (isLoading: boolean, pokemonsList: INamedAPIResourceList) => React.ReactNode;
}> = ({
  limit,
  offset,
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonsList, setPokemonsList] = useState<INamedAPIResourceList>();

  useEffect(() => {
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

  if (!pokemonsList) return null;

  return (
    <>
      {children(isLoading, pokemonsList)}
    </>
  );
};

export default React.memo(AllPokemonsContainer);
