import React, { useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import usePokemon from 'hooks/usePokemon';
import getPokemonTypeNames from 'utils/getPokemonTypeNames';
import PokemonTypeBadge from 'components/PokemonTypeBadge';

import './Pokemon.scss';
import getPokemonColor from 'utils/getPokemonColor';

const Pokemon: React.FC<
  RouteComponentProps<{
    nameOrId: string
  }>
> = ({
  match,
}) => {
  const nameOrId = useMemo(() => match.params.nameOrId, [match.params.nameOrId]);
  const { isLoading, pokemon } = usePokemon(nameOrId);

  if (isLoading || !pokemon) return null;

  const pokemonTypeNames = getPokemonTypeNames(pokemon);
  const pokemonColor = getPokemonColor(pokemon);
  const { name, id, sprites: { front_default: imgSrc } } = pokemon;

  return (
    <main className="Pokemon" style={{ background: pokemonColor }}>
      <div className="Pokemon-Body">
        <h1 className="Pokemon-Name">{name}</h1>
        <section className="Pokemon-Section">
          <div className="Pokemon-Image">
            <img src={imgSrc} alt={name} />
          </div>
          <div className="Pokemon-MainInfo">
            <div className="Pokemon-TypesAndId">
              <div className="Pokemon-Types">
                {pokemonTypeNames.map(
                  typeName => (
                    <PokemonTypeBadge
                      key={typeName}
                      typeName={typeName}
                      className="Pokemon-Badge"
                      filling
                      volume
                    >
                      {typeName}
                    </PokemonTypeBadge>
                  ),
                )}
              </div>
              <div className="Pokemon-Id">{id}</div>
            </div>
            <div className="Pokemon-Stats">
              {
                pokemon.stats.map(stat => (
                  <div className="Pokemon-Stat">
                    <span className="Pokemon-StatName">
                      {stat.stat.name}
                    </span>
                    <span className="Pokemon-StatValue">
                      {stat.base_stat}
                    </span>
                  </div>
                ))
              }
            </div>

          </div>
        </section>
        <h2>Profile</h2>
        <h2>Damage When Attacked</h2>
        <h2>Evolutions</h2>
        <h2>Moves</h2>
      </div>
    </main>
  );
};

export default React.memo(Pokemon);
