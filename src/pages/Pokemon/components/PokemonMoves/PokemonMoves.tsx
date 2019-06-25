import React, { useState } from 'react';
import classNames from 'classnames';
import { IPokemon } from 'types/pokemonTypes';
import MoveContainer from 'containers/MoveContainer';
import PokemonTypeBadge from 'components/PokemonTypeBadge';
import { IMove } from 'types/moveTypes';

import './PokemonMoves.scss';

const PokemonMove: React.FC<{
  move: IMove;
}> = ({ move }) => {
  const [showDetails, setShowDetails] = useState(false);

  const preferredName = move.names.find(
    item => item.language.name === 'en',
  );

  const moveEffect = move.effect_chance
    ? move.effect_entries[0].effect.replace('$effect_chance%', move.effect_chance.toString())
    : move.effect_entries[0].effect;

  const moveIndicators: {name: string, value: string | number}[] = [
    {
      name: 'Power',
      value: move.power || 'N/A',
    },
    {
      name: 'Acc',
      value: move.accuracy ? `${move.accuracy}%` : 'N/A',
    },
    {
      name: 'PP',
      value: move.pp || 'N/A',
    },
  ];

  return (
    <div
      key={move.name}
      className="PokemonMove"
    >
      <div className="PokemonMove-Header">
        <div className="PokemonMove-Name">
          {preferredName
            ? preferredName.name
            : move.name
          }
        </div>
        <PokemonTypeBadge
          className="PokemonMove-Badge"
          typeName={move.type.name}
          filling
          volume
        >
          {move.type.name}
        </PokemonTypeBadge>
        <button
          className="PokemonMove-ShowMore"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          {showDetails ? '🡵' : '🡷'}
        </button>
      </div>
      {showDetails && (
        <div className="PokemonMove-Body">
          <div className="PokemonMove-Indicators">
            {
              moveIndicators.map(indicator => (
                <div key={indicator.name}>
                  <span
                    className="PokemonMove-IndicatorName"
                  >
                    {indicator.name}
                  </span>
                  <span
                    className="PokemonMove-IndicatorValue"
                  >
                    {indicator.value}
                  </span>
                </div>
              ))
            }
          </div>
          <div className="PokemonMove-Effect">
            {moveEffect}
          </div>
        </div>
      )}
    </div>
  );
};

const PokemonMoves: React.FC<{
  pokemon: IPokemon;
}> = ({
  pokemon,
}) => {
  const movesClassName = classNames('PokemonMoves');

  return (
    <div className={movesClassName}>
      {
        pokemon.moves.map(moveItem => (
          <MoveContainer key={moveItem.move.name} name={moveItem.move.name}>
            {(isMoveLoading, move) => move && <PokemonMove move={move} />}
          </MoveContainer>
        ))
      }
    </div>
  );
};

export default React.memo(PokemonMoves);
