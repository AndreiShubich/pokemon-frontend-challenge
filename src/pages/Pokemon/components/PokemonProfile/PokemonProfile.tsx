import React, { useCallback } from 'react';
import { IPokemon } from 'types/pokemonTypes';
import { IPokemonSpecies } from 'types/pokemonSpeciesTypes';
import getPokemonGenderRatio from 'utils/getPokemonGenderRatio';
import getPokemonHeight from 'utils/getPokemonHeight';
import getPokemonCatchRate from 'utils/getPokemonCatchRate';
import getPokemonWeight from 'utils/getPokemonWeight';
import classNames from 'classnames';
import getPokemonHatchSteps from 'utils/getPokemonHatchSteps';
import getPokemonAbilities from 'utils/getPokemonAbilities';
import getPokemonEggGroups from 'utils/getPokemonEggGroups';

import './PokemonProfile.scss';

const PokemonProfile: React.FC<{
  pokemon: IPokemon;
  pokemonSpecies: IPokemonSpecies;
}> = ({ pokemon, pokemonSpecies }) => {
  const renderData = useCallback((property, value, capitalizeValue?: boolean) => {
    const valueClassName = classNames('PokemonProfile-Value', {
      'PokemonProfile-Value_capitalize': capitalizeValue,
    });

    return (
      <div className="PokemonProfile-Data">
        <span className="PokemonProfile-Property">{property}</span>
        <span className={valueClassName}>{value}</span>
      </div>
    );
  }, []);

  return (
    <div className="PokemonProfile">
      <div className="PokemonProfile-Column">
        {renderData('Height', getPokemonHeight(pokemon))}
        {renderData('Catch Rate', getPokemonCatchRate(pokemonSpecies))}
        {renderData('Egg Groups', getPokemonEggGroups(pokemonSpecies), true)}
        {renderData('Abilities', getPokemonAbilities(pokemon), true)}
      </div>
      <div className="PokemonProfile-Column">
        {renderData('Weight', getPokemonWeight(pokemon))}
        {renderData('Gender Ratio', getPokemonGenderRatio(pokemonSpecies))}
        {renderData('Hatch Steps', getPokemonHatchSteps(pokemonSpecies))}
        {renderData('EVs', 'N/A')}
      </div>
    </div>
  );
};

export default React.memo(PokemonProfile);
