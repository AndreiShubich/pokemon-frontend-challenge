import React from 'react';
import { IPokemon } from 'types/pokemonTypes';
import usePokemon from 'hooks/usePokemon';

const PokemonContainer: React.FC<{
  name: string,
  children: (isLoading: boolean, pokemon?: IPokemon) => React.ReactNode;
}> = ({
  name,
  children,
}) => {
  const { isLoading, pokemon } = usePokemon(name);

  return (
    <>
      {children(isLoading, pokemon)}
    </>
  );
};

export default React.memo(PokemonContainer);
