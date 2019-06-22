import React from 'react';
import { IPokemon } from 'types/pokemonTypes';
import Badge from 'components/Badge';
import { TYPE_COLOR_MAP } from 'constants/colors';

import './PokemonCard.scss';

const PokemonCard: React.FC<{
  name: string,
  pokemon?: IPokemon,
}> = ({
  name,
  pokemon,
}) => (
  <figure className="PokemonCard">
    <img
      src={pokemon ? pokemon.sprites.front_default : undefined}
      alt={name}
      className="PokemonCard-Image"
    />
    <figcaption className="PokemonCard-Caption">
      <div className="PokemonCard-ID">{pokemon && `#${pokemon.id}`}</div>
      <div className="PokemonCard-Name">{name}</div>
      <div className="PokemonCard-Types">
        {pokemon
          && pokemon.types.map(
            ({ type }) => (
              <Badge color={TYPE_COLOR_MAP[type.name]}>
                {type.name}
              </Badge>
            ),
          )
        }

      </div>
    </figcaption>
  </figure>
);

export default PokemonCard;
