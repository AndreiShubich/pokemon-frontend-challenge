import React, { useMemo, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { IPokemon } from 'types/pokemonTypes';
import PokemonTypeBadge from 'components/PokemonTypeBadge';
import getPokemonColor from 'utils/getPokemonColor';
import getPokemonTypeNames from 'utils/getPokemonTypeNames';

import './PokemonCard.scss';

const PokemonCard: React.FC<{
  pokemon: IPokemon,
} & HTMLAttributes<HTMLElement>> = ({
  pokemon,
  className,
}) => {
  const pokemonTypeNames = useMemo(() => getPokemonTypeNames(pokemon), [pokemon]);
  const pokemonColor = useMemo(() => getPokemonColor(pokemon), [pokemon]);

  const cardClassName = useMemo(() => classNames('PokemonCard', className), [className]);

  return (
    <figure className={cardClassName} style={{ background: pokemonColor }}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="PokemonCard-Image"
      />
      <figcaption className="PokemonCard-Caption">
        <div className="PokemonCard-Id">{pokemon.id}</div>
        <div className="PokemonCard-Name">{pokemon.name}</div>
        <div className="PokemonCard-Types">
          {pokemonTypeNames.map(typeName => (
            <PokemonTypeBadge
              key={typeName}
              typeName={typeName}
              className="PokemonCard-Type"
            >
              {typeName}
            </PokemonTypeBadge>
          ))
          }
        </div>
      </figcaption>
    </figure>
  );
};

export default React.memo(PokemonCard);
