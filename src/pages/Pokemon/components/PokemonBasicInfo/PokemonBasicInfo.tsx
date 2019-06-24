import React from 'react';
import { IPokemon } from 'types/pokemonTypes';
import getPokemonTypeNames from 'utils/getPokemonTypeNames';
import PokemonTypeBadge from 'components/PokemonTypeBadge';
import { STAT_MAP } from 'constants/stat';

import './PokemonBasicInfo.scss';

const PokemonBasicInfo: React.FC<{
  pokemon: IPokemon;
}> = ({ pokemon }) => {
  const pokemonTypeNames = getPokemonTypeNames(pokemon);

  const {
    name, id, stats, sprites: { front_default: imgSrc },
  } = pokemon;


  return (
    <div className="PokemonBasicInfo">
      {imgSrc
        ? <img className="PokemonBasicInfo-Image" src={imgSrc} alt={name} />
        : <div className="PokemonBasicInfo-Image PokemonBasicInfo-Image_none">?</div>
      }
      <div className="PokemonBasicInfo-Data">
        <div className="PokemonBasicInfo-TypesAndId">
          <div className="PokemonBasicInfo-Types">
            {pokemonTypeNames.map(
              typeName => (
                <PokemonTypeBadge
                  key={typeName}
                  typeName={typeName}
                  className="PokemonBasicInfo-Badge"
                  filling
                  volume
                >
                  {typeName}
                </PokemonTypeBadge>
              ),
            )}
          </div>
          <div className="PokemonBasicInfo-Id">{id}</div>
        </div>
        <div className="PokemonBasicInfo-Stats">
          {
            stats.map(stat => (
              <div key={stat.stat.name} className="PokemonBasicInfo-Stat">
                <span className="PokemonBasicInfo-StatName">
                  {STAT_MAP[stat.stat.name]}
                </span>
                <progress
                  className="PokemonBasicInfo-StatProgress"
                  max={100}
                  value={stat.base_stat}
                  title={`${stat.base_stat}`}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonBasicInfo);
