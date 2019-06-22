import React, { useEffect, useState } from 'react';
import Pokedex from 'utils/Pokedex';
import PokemonPreview from 'components/PokemonPreview';
import { IList } from 'types/listTypes';

import './PokemonsList.scss';

const PokemonsList: React.FC<{
  limit: number;
  offset: number;
}> = ({
  limit,
  offset,
}) => {
  const [pokemonsList, setPokemonsList] = useState<IList>();

  useEffect(() => {
    Pokedex.getPokemonsList({
      limit,
      offset,
    })
      .then((response: IList) => {
        setPokemonsList(response);
      })
      .catch(console.error);
  }, [limit, offset]);

  if (!pokemonsList) return null;

  return (
    <div className="PokemonsList">
      {pokemonsList.results.map(({ name }) => <PokemonPreview key={name} name={name} />)}
    </div>
  );
};

export default PokemonsList;
