import React from 'react';
import { INamedAPIResourceList } from 'types/commonTypes';
import usePokemonList from 'hooks/usePokemonList';

const AllPokemonsContainer: React.FC<{
  limit: number;
  offset: number;
  typeName?: string;
  children: (
    isLoading: boolean, pokemonsList: INamedAPIResourceList | undefined)
  => React.ReactNode;
}> = ({
  limit,
  offset,
  typeName,
  children,
}) => {
  const { isLoading, pokemonsList } = usePokemonList(
    limit,
    offset,
    typeName,
  );

  return (
    <>
      {children(isLoading, pokemonsList)}
    </>
  );
};

export default React.memo(AllPokemonsContainer);
