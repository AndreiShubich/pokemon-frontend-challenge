import React, { useEffect, useState } from 'react';
import { IPokemon } from 'types/pokemonTypes';
import Pokedex from 'utils/Pokedex';

const PokemonContainer: React.FC<{
  name: string,
  children: (isLoading: boolean, pokemon?: IPokemon) => React.ReactNode;
}> = ({
  name,
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    setIsLoading(true);
    Pokedex.getPokemonByName(name)
      .then((response: IPokemon) => {
        setPokemon(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return (
    <>
      {children(isLoading, pokemon)}
    </>
  );
};

export default PokemonContainer;
