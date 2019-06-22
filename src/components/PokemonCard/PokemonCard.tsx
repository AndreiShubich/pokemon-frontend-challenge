import React, { useMemo } from 'react';
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
}) => {
  const pokemonTypeNames = useMemo(() => {
    if (!pokemon) return undefined;
    return pokemon.types.map(({ type }) => type.name);
  }, [pokemon]);

  const pokemonColor = useMemo(() => {
    if (!pokemonTypeNames || !pokemonTypeNames.length) return undefined;
    const [type1, type2] = pokemonTypeNames;

    if (!type2) {
      return TYPE_COLOR_MAP[type1];
    }

    return `linear-gradient(90deg, ${TYPE_COLOR_MAP[type1]} 50%, ${TYPE_COLOR_MAP[type2]} 50%)`;
  }, [pokemonTypeNames]);

  return (
    <figure className="PokemonCard" style={{ background: pokemonColor }}>
      <img
        src={pokemon ? pokemon.sprites.front_default : undefined}
        alt={name}
        className="PokemonCard-Image"
      />
      <figcaption className="PokemonCard-Caption">
        <div className="PokemonCard-ID">{pokemon && `#${pokemon.id}`}</div>
        <div className="PokemonCard-Name">{name}</div>
        <div className="PokemonCard-Types">
          {pokemonTypeNames
          && pokemonTypeNames.map(typeName => (
            <Badge
              color={TYPE_COLOR_MAP[typeName]}
              className="PokemonCard-Type"
            >
              {typeName}
            </Badge>
          ))
          }
        </div>
      </figcaption>
    </figure>
  );
};

export default React.memo(PokemonCard);
