import { useState, useEffect } from 'react';
import Pokedex from 'utils/Pokedex';
import { IEvolutionChain } from 'types/evolutionChainTypes';

const useEvolutionChain = (evolutionChainUrl: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [evolutionChain, setEvolutionChain] = useState<IEvolutionChain>();

  useEffect(() => {
    setIsLoading(true);
    Pokedex.resource(evolutionChainUrl)
      .then((response: IEvolutionChain) => {
        setEvolutionChain(response);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [evolutionChainUrl]);

  return ({ isLoading, evolutionChain });
};

export default useEvolutionChain;
