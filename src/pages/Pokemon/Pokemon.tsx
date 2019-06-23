import React, { useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import usePokemon from 'hooks/usePokemon';
import usePokemonSpecies from 'hooks/usePokemonSpecies';
import getPokemonBackground from 'utils/getPokemonBackground';
import PokemonSection from './components/PokemonSection';
import PokemonBasicInfo from './components/PokemonBasicInfo';
import PokemonProfile from './components/PokemonProfile';

import './Pokemon.scss';

const Pokemon: React.FC<
  RouteComponentProps<{
    nameOrId: string
  }>
> = ({
  match,
}) => {
  const nameOrId = useMemo(() => match.params.nameOrId, [match.params.nameOrId]);
  const { isLoading: isPokemonLoading, pokemon } = usePokemon(nameOrId);
  const { isLoading: isPokemonSpeciesLoading, pokemonSpecies } = usePokemonSpecies(nameOrId);

  if (isPokemonLoading
    || isPokemonSpeciesLoading
    || !pokemon
    || !pokemonSpecies
  ) return null;

  const pokemonColor = getPokemonBackground(pokemon);

  return (
    <main className="Pokemon" style={{ background: pokemonColor }}>
      <div className="Pokemon-Body">
        <PokemonSection title={pokemon.name} isMain>
          <PokemonBasicInfo pokemon={pokemon} />
        </PokemonSection>
        <PokemonSection className="Pokemon-RegularSection" title="Profile">
          <PokemonProfile pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        </PokemonSection>
        {/* <PokemonSection title="Damage When Attacked">{null}</PokemonSection> */}
        <PokemonSection className="Pokemon-RegularSection" title="Evolutions">{null}</PokemonSection>
        <PokemonSection className="Pokemon-RegularSection" title="Moves">{null}</PokemonSection>
      </div>
    </main>
  );
};

export default React.memo(Pokemon);
