import React, { useMemo } from 'react';
import { IPokemon } from 'types/pokemonTypes';

import './PokemonCard.scss';

const PokemonCard: React.FC<{
  name: string,
  pokemon?: IPokemon,
}> = ({
  name,
  pokemon,
}) => {
  const imgSrc = useMemo(() => {
    if (pokemon) {
      return pokemon.sprites.front_default;
    }
    return undefined;
  }, [pokemon]);

  return (
    <figure>
      <img
        src={imgSrc}
        alt={name}
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
