import React, { useMemo, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { IPokemon } from 'types/pokemonTypes';
import PokemonTypeBadge from 'components/PokemonTypeBadge';
import getPokemonBackground from 'utils/getPokemonBackground';
import getPokemonTypeNames from 'utils/getPokemonTypeNames';

import './PokemonCard.scss';

const PokemonCard: React.FC<{
  pokemon: IPokemon,
} & HTMLAttributes<HTMLElement>> = ({
  pokemon,
  className,
}) => {
  const pokemonTypeNames = useMemo(() => getPokemonTypeNames(pokemon), [pokemon]);
  const pokemonColor = useMemo(() => getPokemonBackground(pokemon), [pokemon]);

  const cardClassName = useMemo(() => classNames('PokemonCard', className), [className]);

  const { name, id, sprites: { front_default: imgSrc } } = pokemon;

  return (
    <figure className={cardClassName} style={{ background: pokemonColor }}>
      {imgSrc
        ? <img src={imgSrc} alt={name} className="PokemonCard-Image" />
        : <div className="PokemonCard-Image PokemonCard-Image_none">?</div>
      }
      <figcaption className="PokemonCard-Caption">
        <div className="PokemonCard-Id">{id}</div>
        <div className="PokemonCard-Name">{name}</div>
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
