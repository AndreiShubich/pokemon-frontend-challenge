import React, { useEffect, useState, useMemo } from 'react';
import { IPokemon } from 'types/pokemonTypes';
import Pokedex from 'utils/Pokedex';

import './PokemonPreview.scss';

const PokemonPreview: React.FC<{
  name: string,
}> = ({
  name,
}) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    Pokedex.getPokemonByName(name).then((response: IPokemon) => {
      setPokemon(response);
    });
  }, [name]);

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

export default PokemonPreview;
