import { useState, useEffect } from 'react';
import { IMove } from 'types/moveTypes';
import Pokedex from 'utils/Pokedex';

// pokeapi-js-wrapper, Any function with the designation "ByName" can also be passed an integer ID.
const useMove = (nameOrId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [move, setMove] = useState<IMove>();

  useEffect(() => {
    setIsLoading(true);
    Pokedex.getMoveByName(nameOrId)
      .then((response: IMove) => {
        setMove(response);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, [nameOrId]);

  return ({ isLoading, move });
};

export default useMove;
